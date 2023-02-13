import { BaseModel } from '@utils/templates';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  name: 'users',
})
export class UserEntity extends BaseModel {
  @PrimaryGeneratedColumn('identity', {
    type: 'int',
  })
  user_id: number;

  @Column('varchar')
  username: string;

  @Column('varchar')
  password: string;

  @Column('varchar')
  name: string;

  @Column('smallint')
  gender: number;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  birthday: Date;

  @Column({
    type: 'text',
    nullable: true,
  })
  identity_card: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  phone: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  address: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  facebook: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  gmail: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  yanmail: string;

  @Column({
    type: 'int',
    default: 0,
  })
  salary: number;

  @Column({
    type: 'int',
    default: 0,
  })
  role: number;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  bank_name: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  bank_number: string;

  @Column({
    type: 'int',
    default: 0,
  })
  status: number;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  last_active: Date;
}
