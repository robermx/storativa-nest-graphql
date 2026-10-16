import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { AuthService } from './auth.service.js';
import { SigninInput, SignupInput } from './dto/index.js';
import { JwtAuthGuard } from './guards/jwt-guard.guard.js';
import { AuthResponse } from './types/auth-response.type.js';
import { CurrentUser } from './decorators/current-user.decorator.js';
import { User } from '../users/entities/user.entity.js';

@Resolver( () => AuthResponse)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  // signup mutation
  @Mutation(() => AuthResponse)
  signup(@Args('signupInput') signupInput: SignupInput): Promise<AuthResponse> {
    return this.authService.signup(signupInput);
  }

  // sing in mutation
  @Mutation(() => AuthResponse)
  signIn(@Args('signinInput') signinInput: SigninInput): Promise<AuthResponse> {
    return this.authService.signin(signinInput);
  }

  // Validate token from header Authorization Bearer JWT
  @UseGuards(JwtAuthGuard)
  @Query(() => AuthResponse)
  revalidateToken(@CurrentUser() user: User): AuthResponse {
    return this.authService.revalidateToken(user);
  }
}
