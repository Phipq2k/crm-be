import { Module } from '@nestjs/common';
import { AddressCompanyService } from './address_company.service';
import { AddressCompanyController } from './address_company.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressCompanyEntity } from './entities/address_company.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AddressCompanyEntity])],
  controllers: [AddressCompanyController],
  providers: [AddressCompanyService],
})
export class AddressCompanyModule {}
