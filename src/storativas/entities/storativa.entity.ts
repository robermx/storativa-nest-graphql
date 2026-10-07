import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Storativa {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
