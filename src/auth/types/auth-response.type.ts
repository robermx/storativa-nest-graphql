import { Field, ObjectType } from "@nestjs/graphql";

import { SchemaFactory } from "@nestjs/mongoose";
import { User } from "../../users/entities/user.entity.js";

@ObjectType()
export class AuthResponse {
  @Field(() => String)
  token: string;

  @Field(() => User)
  user: User
}

export const AutResponseSchema = SchemaFactory.createForClass(AuthResponse);