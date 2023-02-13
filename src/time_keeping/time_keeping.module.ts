import { Module } from '@nestjs/common';
import { TimeKeepingService } from './time_keeping.service';
import { TimeKeepingController } from './time_keeping.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimeKeepingEntity } from './entities/time_keeping.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TimeKeepingEntity])],
  controllers: [TimeKeepingController],
  providers: [TimeKeepingService],
})
export class TimeKeepingModule {}