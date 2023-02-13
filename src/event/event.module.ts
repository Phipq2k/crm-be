import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEntity } from './entities/event.entity';
import { UsersModule } from '@user/users.module';
import { UserEntity } from '@user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EventEntity, UserEntity]), UsersModule],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
