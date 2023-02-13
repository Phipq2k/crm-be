import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as moment from 'moment';
import { BaseModel } from '@utils/templates';

@Entity({
  name: 'role',
})
export class RoleEntity extends BaseModel {
  @PrimaryGeneratedColumn('identity', {
    type: 'int',
  })
  role_id: number;

  @Column({
    type: 'text',
    default: '',
  })
  name: string;

  @Column({
    type: 'integer',
    default: 0,
  })
  status: number;
}
