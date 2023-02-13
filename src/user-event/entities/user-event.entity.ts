import { EventEntity } from './../../event/entities/event.entity';
import { BaseModel } from '@utils/templates';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_event')
export class UserEvent extends BaseModel {
  @PrimaryGeneratedColumn('identity', {
    type: 'int',
  })
  user_event_id: number;
  
  @Column({
    type: 'int',
  })
  user_id: number;
  @ManyToOne(() => EventEntity, (event) => event.event_id)
  event_id: number;

  @Column({
    type: 'int',
  })
  status: number;
}
