import { Injectable } from '@nestjs/common';
import { CreateLeaveBreakDto } from './dto/create-leave_break.dto';
import { UpdateLeaveBreakDto } from './dto/update-leave_break.dto';

@Injectable()
export class LeaveBreakService {
  create(createLeaveBreakDto: CreateLeaveBreakDto) {
    return 'This action adds a new leaveBreak';
  }

  findAll() {
    return `This action returns all leaveBreak`;
  }

  findOne(id: number) {
    return `This action returns a #${id} leaveBreak`;
  }

  update(id: number, updateLeaveBreakDto: UpdateLeaveBreakDto) {
    return `This action updates a #${id} leaveBreak`;
  }

  remove(id: number) {
    return `This action removes a #${id} leaveBreak`;
  }
}
