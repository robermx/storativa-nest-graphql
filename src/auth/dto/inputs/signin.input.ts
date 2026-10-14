import { Field, InputType } from '@nestjs/graphql';
import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

@InputType()
export class SigninInput {
  @IsNotEmpty()
  @IsEmail()
  @Transform(({ value }) => value.toLowerCase())
  @Field(() => String)
  email!: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @Field(() => String)
  password!: string;
}
