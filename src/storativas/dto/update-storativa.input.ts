import { CreateStorativaInput } from './create-storativa.input.js';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateStorativaInput extends PartialType(CreateStorativaInput) {
  @Field(() => Int)
  id: number;
}
