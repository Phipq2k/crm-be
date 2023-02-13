import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SigninDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  yanmail: string;

  @ApiProperty({})
  @IsNotEmpty()
  @IsString()
  user_password: string;
}
