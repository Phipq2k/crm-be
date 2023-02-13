import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';
export class ForgotPasswordDto {
  @ApiProperty()
  @IsString()
  @IsEmail()
  readonly yanmail: string;
}
