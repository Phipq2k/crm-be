import { Injectable } from '@nestjs/common';
import { CreateAddressCompanyDto } from './dto/create-address_company.dto';
import { UpdateAddressCompanyDto } from './dto/update-address_company.dto';

@Injectable()
export class AddressCompanyService {
  create(createAddressCompanyDto: CreateAddressCompanyDto) {
    return 'This action adds a new addressCompany';
  }

  findAll() {
    return `This action returns all addressCompany`;
  }

  findOne(id: number) {
    return `This action returns a #${id} addressCompany`;
  }

  update(id: number, updateAddressCompanyDto: UpdateAddressCompanyDto) {
    return `This action updates a #${id} addressCompany`;
  }

  remove(id: number) {
    return `This action removes a #${id} addressCompany`;
  }
}
