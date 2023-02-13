import { UserEntity } from './../../users/entities/user.entity';
import { BaseModel } from '@utils/templates';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('rice_registration')
export class RiceRegistrationEntity extends BaseModel {
  @PrimaryGeneratedColumn('identity', {
    type: 'int',
  })
  rice_registration_id: number;

  @ManyToOne(() => UserEntity, (user) => user.user_id)
  @JoinColumn({
    name: 'user_id',
  })
  user: UserEntity; 

  @Column({ type: 'text' })
  time: string; // dd/mm/yyyy

  @Column({ type: 'int' })
  morning: number;

  @Column({ type: 'int' })
  type_morning: number;

  @Column({ type: 'int' })
  noon: number;

  @Column({ type: 'int' })
  type_noon: number;

  @Column({ type: 'int' })
  evening: number;

  @Column({ type: 'int' })
  type_evening: number;

  @Column({ type: 'int' })
  night: number;

  @Column({ type: 'int' })
  type_night: number;
}
