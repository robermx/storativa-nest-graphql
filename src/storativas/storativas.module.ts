import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { StorativasService } from './storativas.service.js';
import { StorativasResolver } from './storativas.resolver.js';
import { Storativa, StorativaSchema } from './entities/storativa.entity.js';

@Module({
  providers: [StorativasResolver, StorativasService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Storativa.name,
        schema: StorativaSchema,
      },
    ]),
  ]
})
export class StorativasModule {}
