import { Module } from '@nestjs/common';

import { AuthService } from './auth.service.js';
import { AuthResolver } from './auth.resolver.js';
import { UsersModule } from '../users/users.module.js';

@Module({
  providers: [AuthResolver, AuthService],
  imports: [UsersModule],
})
export class AuthModule {}
