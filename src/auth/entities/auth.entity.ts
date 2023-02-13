import { AUTH_STATUS } from '@utils/enums/auth.enum';
import { BaseModel } from '@utils/templates';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('oauth')
export class AuthEntity extends BaseModel {
  @PrimaryColumn({
    type: 'int',
  })
  user_id: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  access_token: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  refresh_token: string;

  @Column({
    type: 'int',
    default: AUTH_STATUS.PAUSE,
  })
  status: number; // hoạt động, tạm ngưng
}
