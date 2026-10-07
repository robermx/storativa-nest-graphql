import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateStorativaInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
