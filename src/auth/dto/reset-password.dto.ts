import { ApiProperty } from '@nestjs/swagger';
import { Match } from '@utils/decorators';
import { IsNotEmpty, MinLength } from 'class-validator';

export class ResetPasswordDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly token: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(6)
  readonly user_password: string;

  @ApiProperty()
  @IsNotEmpty()
  @Match('user_password')
  readonly user_confirm_password: string;
}
