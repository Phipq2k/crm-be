import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { LeaveBreakService } from './leave_break.service';
import { LeaveBreakController } from './leave_break.controller';
import { LeaveBreakEntity } from './entities/leave_break.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LeaveBreakEntity])],
  controllers: [LeaveBreakController],
  providers: [LeaveBreakService],
})
export class LeaveBreakModule {}
