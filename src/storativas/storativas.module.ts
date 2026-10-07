import { Module } from '@nestjs/common';
import { StorativasService } from './storativas.service.js';
import { StorativasResolver } from './storativas.resolver.js';

@Module({
  providers: [StorativasResolver, StorativasService],
})
export class StorativasModule {}
