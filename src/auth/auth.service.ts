import { BadRequestException, Injectable } from '@nestjs/common';
import bcrypt from 'bcryptjs';

import { UsersService } from '../users/users.service.js';
import { AuthResponse, SigninInput, SignupInput } from './dto/index.js';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  async signup(signupInput: SignupInput): Promise<AuthResponse> {
    // TODO: create JWT
    const token = 'ABDq23';
    const user = await this.userService.create(signupInput);

    return { token, user };
  }

  async signin({ email, password }: SigninInput): Promise<AuthResponse> {
    // TODO: create JWT
    const token = 'ABDq23';
    const user = await this.userService.findOneByEmail(email);

    if (!bcrypt.compareSync(password, user.password))
      throw new BadRequestException('Invalid credentials');
    return { token, user };
  }
}
