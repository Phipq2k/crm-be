import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('bonus_punish')
export class BonusPunishEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int',
  })
  bonus_punish_id: number;

  @Column({
    type: 'int',
  })
  user_id: number;

  @Column({
    type: 'text',
  })
  reason: string;

  @Column({
    type: 'int',
  })
  target_id: number;

  @Column({
    type: 'int',
  })
  user_confirm_id: number;

  @Column({
    type: 'text',
  })
  time: string;

  @Column({
    type: 'int',
  })
  status: number;

  @Column({
    type: 'timestamp',
  })
  timestamp: Date;
}
