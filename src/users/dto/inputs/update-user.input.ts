import { InputType, Field, PartialType, ID } from '@nestjs/graphql';
import { IsMongoId } from 'class-validator';

import { CreateUserInput } from './create-user.input.js';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @IsMongoId()
  @Field(() => ID)
  id!: string;
}
