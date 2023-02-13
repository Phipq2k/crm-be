import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LeaveBreakService } from './leave_break.service';
import { CreateLeaveBreakDto } from './dto/create-leave_break.dto';
import { UpdateLeaveBreakDto } from './dto/update-leave_break.dto';

@Controller('leave-break')
export class LeaveBreakController {
  constructor(private readonly leaveBreakService: LeaveBreakService) {}

  @Post()
  create(@Body() createLeaveBreakDto: CreateLeaveBreakDto) {
    return this.leaveBreakService.create(createLeaveBreakDto);
  }

  @Get()
  findAll() {
    return this.leaveBreakService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.leaveBreakService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLeaveBreakDto: UpdateLeaveBreakDto) {
    return this.leaveBreakService.update(+id, updateLeaveBreakDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.leaveBreakService.remove(+id);
  }
}
