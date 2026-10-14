import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import bcrypt from 'bcryptjs';

import { User } from './entities/user.entity.js';
import { SignupInput } from '../auth/dto/index.js';
import { handleException } from '../common/helpers/handleException.js';
import { CatchError } from '../common/interfaces/catch-error.interface.js';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}
  async create(signupInput: SignupInput): Promise<User> {
    try {
      const newUser = new this.userModel({
        ...signupInput,
        password: bcrypt.hashSync(signupInput.password),
      });

      return await newUser.save();
    } catch (error) {
      throw handleException(error as CatchError, 'UserService');
    }
  }

  async findAll(): Promise<User[]> {
    return [];
  }
  
  /** Exclusive method - Just for login */ 
  async findOneByEmail(email: string): Promise<User> {
    const user = await this.userModel.findOne({ email }).exec();
    if (!user)
      /** if the email was not founded  */
      // throw new NotFoundException(`User with email: ${email} not found`);

      throw new BadRequestException('Invalid credentials');
    return user;
  }

  // update(id: number, updateUserInput: UpdateUserInput) {
  //   return `This action updates a #${id} user`;
  // }

  async block(id: string): Promise<User> {
    throw new Error(`block method not implemented`);
  }
}
