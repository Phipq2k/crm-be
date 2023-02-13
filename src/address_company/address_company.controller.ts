import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AddressCompanyService } from './address_company.service';
import { CreateAddressCompanyDto } from './dto/create-address_company.dto';
import { UpdateAddressCompanyDto } from './dto/update-address_company.dto';

@Controller('address-company')
export class AddressCompanyController {
  constructor(private readonly addressCompanyService: AddressCompanyService) {}

  @Post()
  create(@Body() createAddressCompanyDto: CreateAddressCompanyDto) {
    return this.addressCompanyService.create(createAddressCompanyDto);
  }

  @Get()
  findAll() {
    return this.addressCompanyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.addressCompanyService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAddressCompanyDto: UpdateAddressCompanyDto,
  ) {
    return this.addressCompanyService.update(+id, updateAddressCompanyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addressCompanyService.remove(+id);
  }
}
