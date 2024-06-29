import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { User } from './users/entities/user.entity';

@Injectable()
export class AppService {
  constructor(private sequelize: Sequelize) {}
  getHello(): string {
    return 'Hello World!';
  }
}
