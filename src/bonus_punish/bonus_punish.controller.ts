import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BonusPunishService } from './bonus_punish.service';
import { CreateBonusPunishDto } from './dto/create-bonus_punish.dto';
import { UpdateBonusPunishDto } from './dto/update-bonus_punish.dto';

@Controller('bonus-punish')
export class BonusPunishController {
  constructor(private readonly bonusPunishService: BonusPunishService) {}

  @Post()
  create(@Body() createBonusPunishDto: CreateBonusPunishDto) {
    return this.bonusPunishService.create(createBonusPunishDto);
  }

  @Get()
  findAll() {
    return this.bonusPunishService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bonusPunishService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBonusPunishDto: UpdateBonusPunishDto,
  ) {
    return this.bonusPunishService.update(+id, updateBonusPunishDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bonusPunishService.remove(+id);
  }
}
