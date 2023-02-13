import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RiceRegistrationService } from './rice_registration.service';
import { CreateRiceRegistrationDto } from './dto/create-rice_registration.dto';
import { UpdateRiceRegistrationDto } from './dto/update-rice_registration.dto';

@Controller('rice-registration')
export class RiceRegistrationController {
  constructor(
    private readonly riceRegistrationService: RiceRegistrationService,
  ) {}

  @Post()
  create(@Body() createRiceRegistrationDto: CreateRiceRegistrationDto) {
    return this.riceRegistrationService.create(createRiceRegistrationDto);
  }

  @Get()
  findAll() {
    return this.riceRegistrationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.riceRegistrationService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRiceRegistrationDto: UpdateRiceRegistrationDto,
  ) {
    return this.riceRegistrationService.update(+id, updateRiceRegistrationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.riceRegistrationService.remove(+id);
  }
}
