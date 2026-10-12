import { InputType, Field, PartialType, ID } from '@nestjs/graphql';
import { IsMongoId } from 'class-validator';

import { CreateStorativaInput } from './create-storativa.input.js';

@InputType()
export class UpdateStorativaInput extends PartialType(CreateStorativaInput) {
  @IsMongoId()
  @Field(() => ID)
  id!: string;
}
