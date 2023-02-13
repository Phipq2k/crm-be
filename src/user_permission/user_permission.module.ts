import { Module } from '@nestjs/common';
import { UserPermissionService } from './user_permission.service';
import { UserPermissionController } from './user_permission.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '@user/entities/user.entity';
import { PermissionEntity } from 'src/permission/entities/permission.entity';
import { UserPermissionEntity } from './entities/user_permission.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      PermissionEntity,
      UserPermissionEntity,
    ]),
  ],
  controllers: [UserPermissionController],
  providers: [UserPermissionService],
})
export class UserPermissionModule {}
