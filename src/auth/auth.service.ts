import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcryptjs';

import { UsersService } from '../users/users.service.js';
import { AuthResponse, SigninInput, SignupInput } from './dto/index.js';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  private getJwt(userId: string) {
    return this.jwtService.sign({ id: userId });
  }

  async signup(signupInput: SignupInput): Promise<AuthResponse> {
    const user = await this.userService.create(signupInput);
    const token = this.getJwt(user.id);

    return { token, user };
  }

  async signin({ email, password }: SigninInput): Promise<AuthResponse> {
    const user = await this.userService.findOneByEmailForSignin(email);
    const token = this.getJwt(user.id);

    if (!bcrypt.compareSync(password, user.password))
      throw new BadRequestException('Invalid credentials');
    return { token, user };
  }
}
