import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { ResponseMessage } from '@utils/metadatas';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ResponseMessage('Successfully created event')
  async createEvent(@Body() createEventDto: CreateEventDto): Promise<any> {
    await this.eventService.createEvent(createEventDto);

  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAllEvent(): Promise<any> {
    const event = await this.eventService.findAllEvent();
    return event;
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOneEventById(@Param('id') id: number): Promise<any> {
    return await this.eventService.findOneEventById(+id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async updateEventById(
    @Param('id') id: string,
    @Body() updateEventDto: UpdateEventDto,
  ): Promise<any> {
    return await this.eventService.updateEventById(+id, updateEventDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async removeEventById(@Param('id') id: string): Promise<any> {
    return await this.eventService.removeEventById(+id);
  }
}
