import { PartialType } from '@nestjs/mapped-types';
import { CreateBonusPunishDto } from './create-bonus_punish.dto';

export class UpdateBonusPunishDto extends PartialType(CreateBonusPunishDto) {}
