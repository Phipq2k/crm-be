import { PartialType } from '@nestjs/swagger';
import { CreateLeaveBreakDto } from './create-leave_break.dto';

export class UpdateLeaveBreakDto extends PartialType(CreateLeaveBreakDto) {}
