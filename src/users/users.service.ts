import { Injectable } from '@nestjs/common';
// import { CreateUserInput } from './dto/create-user.input.js';
// import { UpdateUserInput } from './dto/update-user.input.js';
import { User } from './entities/user.entity.js';

@Injectable()
export class UsersService {
  // create(createUserInput: CreateUserInput) {
  //   return 'This action adds a new user';
  // }

  async findAll(): Promise<User[]> {
    return [];
  }

  async findOne(id: string): Promise<User> {
    throw new Error(`findOne method not implemented`)
  }

  // update(id: number, updateUserInput: UpdateUserInput) {
  //   return `This action updates a #${id} user`;
  // }

  async block(id: string): Promise<User> {
    throw new Error(`block method not implemented`)
  }
}
