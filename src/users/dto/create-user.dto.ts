import { ApiProperty } from '@nestjs/swagger';
import { Match } from '@utils/decorators';
import {
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly user_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly full_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  readonly yanmail: string;

  @ApiProperty()
  @IsNotEmpty({})
  @IsString()
  @MinLength(6)
  readonly user_password: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  readonly role?: number;

  @ApiProperty()
  @IsNumber()
  readonly gender: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @Match('user_password')
  readonly user_confirm_password: string;
}
