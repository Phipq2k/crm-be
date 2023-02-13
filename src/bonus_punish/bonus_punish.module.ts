import { Module } from '@nestjs/common';
import { BonusPunishService } from './bonus_punish.service';
import { BonusPunishController } from './bonus_punish.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BonusPunishEntity } from './entities/bonus_punish.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BonusPunishEntity])],
  controllers: [BonusPunishController],
  providers: [BonusPunishService],
})
export class BonusPunishModule {}
