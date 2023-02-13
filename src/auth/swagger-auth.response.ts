import { ApiResponseProperty } from '@nestjs/swagger';
import { SwaggerBaseResponse } from '@utils/templates/swagger-base-response.template';

export class AuthResponse {
  @ApiResponseProperty({
    type: Number,
  })
  user_id: number;

  @ApiResponseProperty({
    type: String,
  })
  access_token: String;

  @ApiResponseProperty({
    type: String,
  })
  refresh_token: String;
}

export class SwaggerAuthResponse extends SwaggerBaseResponse {
  @ApiResponseProperty({
    type: AuthResponse,
  })
  data: AuthResponse;
}
