import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcryptjs';

import { UsersService } from '../users/users.service.js';
import { SigninInput, SignupInput } from './dto/index.js';
import { AuthResponse } from './types/auth-response.type.js';
import { User } from '../users/entities/user.entity.js';

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

  async validateUser(id: string): Promise<User> {
    const user = await this.userService.findOneById(id);
    if (!user.isActive)
      throw new UnauthorizedException(
        'User is not Active - talk with an admin',
      );

    return user;
  }

  revalidateToken(user: User): AuthResponse {
    const token = this.getJwt(user.id);
    return { token, user };
  }
}
