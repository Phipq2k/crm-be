import { Injectable } from '@nestjs/common';
import { CreateBonusPunishDto } from './dto/create-bonus_punish.dto';
import { UpdateBonusPunishDto } from './dto/update-bonus_punish.dto';

@Injectable()
export class BonusPunishService {
  create(createBonusPunishDto: CreateBonusPunishDto) {
    return createBonusPunishDto;
  }

  findAll() {
    return `This action returns all bonusPunish`;
  }

  findOne(id: number) {
    
    return `This action returns a #${id} bonusPunish`;
  }

  update(id: number, updateBonusPunishDto: UpdateBonusPunishDto) {
    return `This action updates a #${id} bonusPunish`;
  }

  remove(id: number) {
    return `This action removes a #${id} bonusPunish`;
  }
}
