import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, EntityRepository, Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { AuthEntity } from './entities/auth.entity';

export class AuthRepository extends Repository<AuthEntity> {
  constructor(
    @InjectRepository(AuthEntity) private authRepo: Repository<AuthEntity>,
  ) {
    super(authRepo.target, authRepo.manager, authRepo.queryRunner);
  }

  async updateRefreshToken(user_id: number, refresh_token: string) {
    await this.createQueryBuilder()
      .update(AuthEntity)
      .set({
        refresh_token,
      })
      .where('user_id = :user_id', { user_id })
      .execute();
  }

  async insertAuth(data: DeepPartial<AuthEntity>) {
    const newAuth = this.create({
      ...data,
    });
    return await newAuth.save();
  }

  async deleteManyAuth() {
    return await this.authRepo.delete({});
  }

  async getAuthByUserId(user_id: number): Promise<AuthEntity> {
    return await this.createQueryBuilder()
      .andWhere('user_id = :user_id AND refresh_token IS NOT NULL', { user_id })
      .getOne();
  }
}
