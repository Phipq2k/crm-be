import { RiceRegistrationEntity } from './entities/rice_registration.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { CreateRiceRegistrationDto } from './dto/create-rice_registration.dto';
import { UpdateRiceRegistrationDto } from './dto/update-rice_registration.dto';
import { Repository } from 'typeorm';
import { BaseResponseInterceptor } from 'src/interceptors/base-response.interceptor';

@Injectable()
export class RiceRegistrationService {
  constructor(
    @InjectRepository(RiceRegistrationEntity)
    private riceRegistrationRepository: Repository<RiceRegistrationEntity>,
  ) {}

  async create(
    createRiceRegistrationDto: CreateRiceRegistrationDto,
  ): Promise<any> {
    const event = this.riceRegistrationRepository.create(
      createRiceRegistrationDto,
    );
    await this.riceRegistrationRepository.save(event);
    return event;
  }

  async findAll(): Promise<any> {
    const event = await this.riceRegistrationRepository.find();
    return event;
  }

  async findOne(rice_registration_id: number): Promise<any> {
    const event = await this.riceRegistrationRepository.findOneBy({
      rice_registration_id,
    });
    return event;
  }

  async update(
    rice_registration_id: number,
    updateRiceRegistrationDto: UpdateRiceRegistrationDto,
  ): Promise<any> {
    const event = await this.update(
      rice_registration_id,
      updateRiceRegistrationDto,
    );
    return event;
  }

  async remove(rice_registration_id: number): Promise<any> {
    const event = await this.remove(rice_registration_id);
    return event;
  }
}
