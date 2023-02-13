import { PartialType } from '@nestjs/mapped-types';
import { CreateAddressCompanyDto } from './create-address_company.dto';

export class UpdateAddressCompanyDto extends PartialType(
  CreateAddressCompanyDto,
) {}
