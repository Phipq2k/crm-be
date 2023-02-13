import { BaseModel } from './../../utils/templates/base-entity.template';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AddressCompanyEntity } from 'src/address_company/entities/address_company.entity';
import { UserEntity } from '@user/entities/user.entity';
@Entity('time_keeping')
export class TimeKeepingEntity extends BaseModel {
  // Id chấm công
  @PrimaryGeneratedColumn('identity', {
    type: 'int',
  })
  time_keeping_id: number;

  //Người được chấm công
  @ManyToOne(() => UserEntity, (user) => user.user_id)
  @JoinColumn({
    name: 'user_id',
  })
  user_id: UserEntity;

  // Id địa chỉ công ty
  @OneToOne(
    () => AddressCompanyEntity,
    (address_company) => address_company.address_company_id,
  )
  @JoinColumn({
    name: 'address_company_id',
  })
  address_company_id: number;

  // Vĩ độ checkin
  @Column({
    type: 'varchar',
  })
  lat: string;

  // Kinh độ checkin
  @Column({
    type: 'varchar',
  })
  lng: string;

  // Ip user
  @Column({
    type: 'varchar',
  })
  ip: string;

  //checkin hoặc checkout
  @Column({
    type: 'int',
  })
  type: number;

  // timestamp
  @Column({
    type: 'timestamp',
  })
  timestamp: Date;
}
