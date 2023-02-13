import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, FindOptionsWhere, Repository } from 'typeorm';
import * as bycript from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersDto } from './dto/user.dto';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async hashData(data: string): Promise<string> {
    return await bycript.hash(data, 10);
  }

  async compareValue(value1: string | Buffer, value2: string) {
    return await bycript.compare(value1, value2);
  }

  async getUser(query: FindOptionsWhere<UserEntity>) {
    return await this.userRepository.findOne({
      where: query,
    });
  }

  async deleteAllUser() {
    await this.userRepository.delete({});
  }

  async updateUser(query: FindOptionsWhere<UserEntity>, data: QueryDeepPartialEntity<UserEntity>){
    await this.userRepository.update(query, data);
  }

  async createUser(body: Omit<CreateUserDto, 'user_confirm_password'>) {
    const newUser = this.userRepository.create({
      username: body.user_name,
      yanmail: body.yanmail,
      name: body.full_name,
      password: await this.hashData(body.user_password),
      ...body,
    });
    await this.userRepository.save(newUser);
    return newUser;
  }
  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
