import { ConfigOptionService } from '@config/config.service';
import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  LoggerService,
  OnModuleInit,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '@user/dto/create-user.dto';
import { AuthInfo } from '@utils/types';

import { AuthRepository } from './auth.repository';
import { UsersService } from '@user/users.service';
import { SigninDto } from './dto/signin.dto';

import { AUTH_STATUS, ROLE } from '@utils/enums/auth.enum';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { EmailService } from '@email/email.service';
import { ChangePasswordDto } from './dto/change-password.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly jwtService: JwtService,
    private readonly userService: UsersService,
    private readonly configService: ConfigOptionService,
    private readonly emailService: EmailService
  ) {}

  //Tokens generation
  private async getTokens(userId: number, yanmail: string): Promise<AuthInfo> {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          yanmail,
        },
        {
          secret: this.configService.get('ACCESS_TOKEN_SECRET'),
          expiresIn: this.configService.get('ACCESS_TOKEN_EXPIRESIN'),
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          yanmail,
        },
        {
          secret: this.configService.get('REFRESH_TOKEN_SECRET'),
          expiresIn: this.configService.get('REFRESH_TOKEN_EXPIRESIN'),
        },
      ),
    ]);

    return {
      user_id: userId,
      access_token: at,
      refresh_token: rt,
    };
  }

  private async updateRefreshTokenHash(userId: number, rt: string | null) {
    const hash = rt && (await this.userService.hashData(rt));
    await this.authRepository.updateRefreshToken(userId, hash);
  }

  // private async updateResetToken(userId: string, resetToken: string) {
  //   await this.userService.updateUser({ _id: userId }, { reset_token: resetToken });
  //   setTimeout(async () => {
  //     await this.userService.updateUser({ _id: userId }, { reset_token: null });
  //   }, 60000 * 15);
  // }

  async registerAccount(dto: CreateUserDto) {
    const { user_name, user_password, user_confirm_password, ...userDto } = dto;
    const user = await this.userService.getUser({ yanmail: dto.yanmail });
    if (user) throw new ForbiddenException('Email này đã được sử dụng');

    const newUser = await this.userService.createUser({
      user_name,
      role: ROLE.STAFF,
      user_password,
      ...userDto,
    });

    const authInfo = await this.getTokens(newUser.user_id, newUser.yanmail);
    const hashRt = await this.userService.hashData(authInfo.refresh_token);
    await this.authRepository.insertAuth({
      access_token: '',
      refresh_token: hashRt,
      user_id: newUser.user_id,
      status: AUTH_STATUS.WORK,
    });
    // await this.updateResetToken(newUser._id.toString(), null);
    return authInfo;
  }

  async loginAccount(dto: SigninDto) {
    const { yanmail, user_password } = dto;
    const user = await this.userService.getUser({ yanmail });
    //Check user not exist
    if (!user) throw new BadRequestException('Tài khoản không tồn tại');

    const auth = await this.authRepository.getAuthByUserId(user.user_id);
    if (auth)
      throw new ForbiddenException(
        'Tài khoản đang được đăng nhập trên thiết bị khác',
      );

    //Check hashed password
    const passwordMatch = await this.userService.compareValue(
      user_password,
      user.password,
    );
    console.log(await this.userService.hashData(user_password), user.password);

    if (!passwordMatch)
      throw new UnauthorizedException('Mật khẩu không chính xác');

    //update refresh token
    const authInfo = await this.getTokens(user.user_id, user.username);
    await this.updateRefreshTokenHash(user.user_id, authInfo.refresh_token);
    return authInfo;
  }


  async forgotPassword(dto: ForgotPasswordDto){
    const newPassword = Math.random().toString(36).slice(-8);
    const user = await this.userService.getUser({yanmail: dto.yanmail});
    if(!user) throw new BadRequestException('Email này chưa được đăng ký');
    const hashPassword = await this.userService.hashData(newPassword);
    await this.userService.updateUser({user_id: user.user_id}, {password: hashPassword});
    await this.emailService.sendUserConfirmation(dto.yanmail, `Đây là mật khẩu mới của bạn: ${newPassword}`);
  }

  async changePasswordDto(user_id: number, dto: ChangePasswordDto){
    const user = await this.userService.getUser({user_id});
    if(!user) throw new BadRequestException('Invalid user');
    const hashPassword = await this.userService.hashData(dto.new_password);
    await this.userService.updateUser({user_id}, {
      password: hashPassword
    });
  }

  async logoutAccount(user_id: number) {
    /* Check value of hahsedRt that it's null */
    const auth = await this.authRepository.getAuthByUserId(user_id);
    console.log(user_id);

    if (!auth) throw new BadRequestException('Tài khoản chưa đăng nhập');
    await this.updateRefreshTokenHash(user_id, null);
  }

  async refreshToken(user_id: number, rt: string) {
    const user = await this.userService.getUser({ user_id });
    if (!user) throw new BadRequestException('Không tìm thấy tài khoản');
    const auth = await this.authRepository.getAuthByUserId(user.user_id);
    if (!auth) throw new BadRequestException('Tài khoản chưa đăng nhập');
    const rtMatch = await this.userService.compareValue(rt, auth.refresh_token);
    if (!rtMatch) throw new UnauthorizedException('Mã không hợp lệ');
    //update refresh token
    const authInfo = await this.getTokens(user.user_id, user.yanmail);
    await this.updateRefreshTokenHash(user.user_id, authInfo.refresh_token);
    return authInfo;
  }
}
