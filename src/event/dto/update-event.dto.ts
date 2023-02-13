import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CreateEventDto } from './create-event.dto';

export class UpdateEventDto extends PartialType(CreateEventDto) {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  user_id: number;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  time_before: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  time_after: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  status: number;
}
