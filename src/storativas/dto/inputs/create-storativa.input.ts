import { InputType, Int, Field } from '@nestjs/graphql';
import {
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';
import { Transform } from 'class-transformer';

@InputType()
export class CreateStorativaInput {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.toLowerCase())
  @Field(() => String)
  title!: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.toLowerCase())
  @Field(() => String)
  author!: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.toLowerCase())
  @Field(() => String)
  centralIdea!: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  @Field(() => String)
  basedDate!: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(2)
  @IsIn(['es', 'en'])
  @Field(() => String)
  language!: 'es' | 'en';

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @Field(() => Int)
  status!: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @Field(() => Int)
  timeToComplete!: number;
}
