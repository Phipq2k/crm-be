import { UserEntity } from '@user/entities/user.entity';
import { BaseModel } from '@utils/templates';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('event')
export class EventEntity extends BaseModel {
  @PrimaryGeneratedColumn('identity', {
    type: 'int',
  })
  event_id: number;

  @ManyToOne(() => UserEntity, (user) => user.user_id)
  @JoinColumn({
    name: 'user_id',
  })
  user: UserEntity;

  @Column({
    type: 'text',
  })
  time_before: string;

  @Column({
    type: 'text',
  })
  time_after: string;

  @Column({
    type: 'varchar',
  })
  title: string;

  @Column({
    type: 'text',
  })
  description: string;

  @Column({
    type: 'int',
  })
  status: number;
}
