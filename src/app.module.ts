import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigOptionModule } from './config/config.module';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionFilter } from './filters/exception.filter';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigOptionService } from '@config/config.service';
import { RiceRegistrationModule } from './rice_registration/rice_registration.module';
import { BonusPunishModule } from './bonus_punish/bonus_punish.module';
import { AddressCompanyModule } from './address_company/address_company.module';
import { EventModule } from './event/event.module';
import { UserEventModule } from './user-event/user-event.module';
import { PermissionModule } from './permission/permission.module';
import { UserPermissionModule } from './user_permission/user_permission.module';
import { LeaveBreakModule } from './leave_break/leave_break.module';
import { TimeKeepingModule } from './time_keeping/time_keeping.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    ConfigOptionModule,
    BonusPunishModule,
    AddressCompanyModule,
    EventModule,
    EmailModule,
    UserEventModule,
    PermissionModule,
    UserPermissionModule,
    LeaveBreakModule,
    TimeKeepingModule,
  ],
  controllers: [],

  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionFilter,
    },
  ],
})
export class AppModule {}
