import { PartialType } from '@nestjs/swagger';
import { CreateRiceRegistrationDto } from './create-rice_registration.dto';

export class UpdateRiceRegistrationDto extends PartialType(
  CreateRiceRegistrationDto,
) {}
