import { Test, TestingModule } from '@nestjs/testing';
import { LeaveBreakService } from './leave_break.service';

describe('LeaveBreakService', () => {
  let service: LeaveBreakService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LeaveBreakService],
    }).compile();

    service = module.get<LeaveBreakService>(LeaveBreakService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
