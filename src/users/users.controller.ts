import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ExceptionResponse } from '@utils/exceptions';
import { BaseResponse } from '@utils/exceptions/base-reponse';
import { query } from 'express';
import { UsersDto } from './dto/user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto);
  // }

  @Get()
  async getUser(@Res() res, @Query() query: UsersDto) {
    const data = await this.usersService.getUser(query);
    return res.status(HttpStatus.OK).send(new BaseResponse({ data }));
  }

  @Post('create')
  async createUser(@Res() res, @Body() body: CreateUserDto) {
    await this.usersService.createUser(body);
    return res.status(HttpStatus.OK).send(new BaseResponse({}));
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
