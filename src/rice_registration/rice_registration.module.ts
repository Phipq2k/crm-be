import { RiceRegistrationEntity } from './entities/rice_registration.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { RiceRegistrationService } from './rice_registration.service';
import { RiceRegistrationController } from './rice_registration.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RiceRegistrationEntity])],
  controllers: [RiceRegistrationController],
  providers: [RiceRegistrationService],
})
export class RiceRegistrationModule {}
