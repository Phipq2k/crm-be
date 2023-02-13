import { BaseModel } from '@utils/templates';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('permission')
export class PermissionEntity extends BaseModel {
  @PrimaryGeneratedColumn('identity', {})
  permission_id: number;

  @Column({
    type: 'text',
    default: '',
  })
  name: string;

  @Column({
    type: 'text',
    default: '',
  })
  code: string;

  @Column({
    type: 'int',
    default: 0,
  })
  status: number;
}
