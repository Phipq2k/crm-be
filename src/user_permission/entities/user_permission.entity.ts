import { UserEntity } from '@user/entities/user.entity';
import { BaseModel } from '@utils/templates';
import { PermissionEntity } from 'src/permission/entities/permission.entity';
import {
  BaseEntity,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('user_permission')
export class UserPermissionEntity extends BaseModel {
  @PrimaryGeneratedColumn('identity')
  user_permission_id: number;

  @ManyToOne(() => UserEntity, (user) => user.user_id)
  @JoinColumn({
    name: 'user_id',
  })
  user: UserEntity;

  @ManyToOne(() => PermissionEntity, (permission) => permission.permission_id)
  @JoinColumn({
    name: 'permission_id',
  })
  permission: PermissionEntity;
}
