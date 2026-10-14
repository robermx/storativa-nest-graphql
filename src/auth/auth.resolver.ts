import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { AuthService } from './auth.service.js';
import { SigninInput, SignupInput, AuthResponse } from './dto/index.js';


@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  // signup mutation
  @Mutation(() => AuthResponse)
  signup(@Args('signupInput') signupInput: SignupInput): Promise<AuthResponse> {
    return this.authService.signup(signupInput)
  }

  // sing in mutation
  @Mutation(() => AuthResponse)
  signIn(
    @Args('signinInput') signinInput: SigninInput
  ): Promise<AuthResponse> {
    return this.authService.signin(signinInput)
  }

  // token calls
  // @Query(/** */, {name: 'revalidate'})
  // revalidateToken() {
  //   return this.authService.revalidateToken('/** ??? */')
  // }
}
