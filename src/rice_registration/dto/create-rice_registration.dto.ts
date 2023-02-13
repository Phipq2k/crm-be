import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRiceRegistrationDto {

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  user_id: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  time: string; // dd/mm/yyyy

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  morning: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  type_morning: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  noon: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  type_noon: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  evening: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  type_evening: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  night: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  type_night: number;
}
