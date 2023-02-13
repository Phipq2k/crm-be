import { Injectable } from '@nestjs/common';
import { CreateTimeKeepingDto } from './dto/create-time_keeping.dto';
import { UpdateTimeKeepingDto } from './dto/update-time_keeping.dto';

@Injectable()
export class TimeKeepingService {
  create(createTimeKeepingDto: CreateTimeKeepingDto) {
    return 'This action adds a new timeKeeping';
  }

  findAll() {
    return `This action returns all timeKeeping`;
  }

  findOne(id: number) {
    return `This action returns a #${id} timeKeeping`;
  }

  update(id: number, updateTimeKeepingDto: UpdateTimeKeepingDto) {
    return `This action updates a #${id} timeKeeping`;
  }

  remove(id: number) {
    return `This action removes a #${id} timeKeeping`;
  }
}
