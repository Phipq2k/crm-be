import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from '@user/users.service';
import { Repository } from 'typeorm';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { EventEntity } from './entities/event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(EventEntity)
    private eventRepository: Repository<EventEntity>,
    private readonly usersService: UsersService,
  ) {}

  async createEvent(createEventDto: CreateEventDto) {
    const user = await this.usersService.getUser({
      user_id: createEventDto.user_id,
    });
    if (!user) throw new BadRequestException('User not found');

    const event = this.eventRepository.create({
      ...createEventDto,
      user: user,
    });
    console.log(createEventDto);
    console.log(event);
    await this.eventRepository.save(event);
    return event;
  }

  async findAllEvent() {
    return await this.eventRepository.find();
  }

  async findOneEventById(id: number) {
    return await this.eventRepository.findOne({
      where: {
        event_id: id,
      },
    });
  }

  async updateEventById(id: number, updateEventDto: UpdateEventDto) {
    await this.eventRepository.update({ event_id: id }, updateEventDto);
    return await this.eventRepository.findOne({
      where: {
        event_id: id,
      },
    });
  }

  async removeEventById(id: number) {
    await this.eventRepository.delete({ event_id: id });
    const findEvent = this.eventRepository.findOne({
      where: {
        event_id: id,
      },
    });
    if (!findEvent) return `This action removes a #${id} event`;
  }
}
