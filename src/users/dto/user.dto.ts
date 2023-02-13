import { IsNotEmpty, IsNumber } from 'class-validator';

export class UsersDto {
  user_id: number;

  username: string;

  password: string;

  name: string;

  gender: number;

  birthday: Date;

  identity_card: string;

  phone: string;

  address: string;

  facebook: string;

  gmail: string;

  yanmail: string;

  salary: number;

  role: number;

  bank_name: string;

  bank_number: string;

  status: number;

  last_active: Date;

  timestamp: Date;
}
