import { RefreshTokenGuard } from '@guard/refresh-token.guard';
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Query,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '@user/dto/create-user.dto';
import { GetCurrentUser, GetCurrentUserId } from '@utils/decorators';
import { NotAuth, ResponseMessage } from '@utils/metadatas';
import { SwaggerBaseResponse } from '@utils/templates/swagger-base-response.template';
import { AuthInfo } from '@utils/types';
import { BadRequestExceptionFilter } from 'src/filters/bad-request-exception.filter';
import { AuthService } from './auth.service';
import { ChangePasswordDto } from './dto/change-password.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { SigninDto } from './dto/signin.dto';
import { AuthResponse, SwaggerAuthResponse } from './swagger-auth.response';

@ApiTags('Auth')
@Controller('auth')
// @UseFilters(BadRequestExceptionFilter)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @NotAuth()
  @Post('/signup')
  @ApiResponse({
    description: 'Đăng ký',
    status: HttpStatus.CREATED,
    type: SwaggerAuthResponse,
  })
  @ResponseMessage('success')
  @HttpCode(HttpStatus.CREATED)
  public async registerAccount(
    @Body() createUserDto: CreateUserDto,
  ): Promise<AuthInfo> {
    return await this.authService.registerAccount(createUserDto);
  }

  @NotAuth()
  @Post('/signin')
  @ApiResponse({
    description: 'Đăng nhập',
    status: HttpStatus.OK,
    type: SwaggerAuthResponse,
  })
  @ResponseMessage('success')
  @HttpCode(HttpStatus.OK)
  public async loginAccount(@Body() dto: SigninDto): Promise<AuthInfo> {
    return await this.authService.loginAccount(dto);
  }

  @Post('/signout')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth()
  @ResponseMessage('success')
  @ApiResponse({
    description: 'Đăng xuất',
    status: HttpStatus.OK
  })
  public async logoutAccount(
    @GetCurrentUserId() user_id: number
  ): Promise<void> {
    return await this.authService.logoutAccount(user_id);
  }

  @Post('/forgot-password')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth()
  @NotAuth()
  @ResponseMessage('success')
  @ApiResponse({
    description: 'Quên mật khẩu',
    status: HttpStatus.OK
  })
  public async forgotPassword(
    @Query() dto: ForgotPasswordDto
  ): Promise<void> {
    await this.authService.forgotPassword(dto);
  }


  @Post('/change-password')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth()
  @ResponseMessage('success')
  @ApiResponse({
    description: 'Thay đổi mật khẩu',
    status: HttpStatus.OK
  })
  public async changePassword(
    @GetCurrentUserId() user_id: number,
    @Body() dto: ChangePasswordDto
  ): Promise<void> {
    await this.authService.changePasswordDto(user_id,dto);
  }



  

  @NotAuth()
  @UseGuards(RefreshTokenGuard)
  @Post('/refresh')
  @ResponseMessage('success')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    description: 'Lấy access_token',
    type: SwaggerAuthResponse,
  })
  public async refreshToken(
    @GetCurrentUserId() user_id: number,
    @GetCurrentUser('rt') refresh_token: string,
  ): Promise<AuthInfo> {
    return await this.authService.refreshToken(user_id, refresh_token);
  }
}
