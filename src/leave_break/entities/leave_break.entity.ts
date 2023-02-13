import { UserEntity } from './../../users/entities/user.entity';
import { BaseModel } from '@utils/templates';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('leave_break')
export class LeaveBreakEntity extends BaseModel {
  //Id đơn xin nghỉ phép
  @PrimaryGeneratedColumn('identity', {
    type: 'int',
  })
  leave_break_id: number;

  // Id user làm đơn xin nghỉ
  @ManyToOne(() => UserEntity, (user) => user.user_id)
  @JoinColumn({
    name: 'user_id',
  })
  user: UserEntity;

  // Lý do xin nghỉ
  @Column({
    type: 'text'
  })
  reason: string;

  // User phê duyệt đơn nghỉ
  @ManyToOne(() => UserEntity, (user) => user.user_id)
  @JoinColumn({
    name: 'user_confirm_id',
  })
  user_confirm: UserEntity;

  // Ngày bắt đầu nghỉ
  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  time_before: Date;

  // Ngày kết thúc
  @Column({
    type: 'timestamp',
  })
  time_after: Date;

  // Thời gian bắt đầu
  @Column({
    type: 'timestamp',
  })
  from_hour: Date;

  // Thời gian kết thúc
  @Column({
    type: 'varchar',
    length: 50
  })
  to_hour: string;

  // Lăp lại
  @Column({
    type: 'int',
  })
  repeat: number;

  // Ngày nghỉ trong tuần
  @Column('int', {
    array: true,
  })
  weekdays: number[];

  // Trạng thái chờ xác nhận, đã hủy, đã xác nhận, đã từ chối
  @Column({
    type: 'int',
  })
  status: number;

  // timestamp
  @Column({
    type: 'timestamp',
  })
  timestamp: Date;
}
