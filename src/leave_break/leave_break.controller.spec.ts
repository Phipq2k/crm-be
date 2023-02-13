import { Test, TestingModule } from '@nestjs/testing';
import { LeaveBreakController } from './leave_break.controller';
import { LeaveBreakService } from './leave_break.service';

describe('LeaveBreakController', () => {
  let controller: LeaveBreakController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeaveBreakController],
      providers: [LeaveBreakService],
    }).compile();

    controller = module.get<LeaveBreakController>(LeaveBreakController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
