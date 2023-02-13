import { ApiResponseProperty } from '@nestjs/swagger';

export class SwaggerBaseResponse {
  @ApiResponseProperty({
    type: Number,
  })
  status: number;

  @ApiResponseProperty({
    type: String,
  })
  message: string;
}
