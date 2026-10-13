import { InputType, Int, Field } from '@nestjs/graphql';
import { Transform } from 'class-transformer';
import { IsArray, IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.toLowerCase())
  @Field(() => String)
  fullName!: string;

  @IsNotEmpty()
  @IsEmail()
  @Transform(({ value }) => value.toLowerCase())
  @Field(() => String)
  email!: string;

  @IsNotEmpty()
  @IsString()
  // @Field(() => String)
  password!: string;

  @IsArray()
  @Field(() => [String])
  roles!: string;

  @IsNotEmpty()
  @IsBoolean()
  @Field(() => Boolean)
  isActive!: boolean;
}
