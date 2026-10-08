import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
@Schema({ timestamps: true })
export class Storativa extends Document {
  // userId: mongoId

  // title: "the long Night"
  @Prop({ index: true, required: true, trim: true })
  @Field(() => String)
  title!: string;

  //author: "Joe Doe"
  @Prop({ required: true, trim: true })
  @Field(() => String)
  author!: string;

  // central Idea "brief, concept, idea, message. etc"
  @Prop({ required: true, trim: true })
  @Field(() => String)
  centralIdea!: string;

  // status: {1: pending, 2: active, 3: completed, 4: inactive}
  @Prop({ required: true })
  @Field(() => Int)
  status!: number;

  //timeToComplete: 120: numberOfDays
  @Prop({ required: true })
  @Field(() => Int)
  timeToComplete!: number;

  // initialBasedDate: starts on: 2015/05/01 YYYY/MM/DD
  @Prop({
    required: true,
    trim: true,
  })
  @Field(() => String)
  initialBasedDate!: string;

  // language es | en

  // adaptedPeriods [multiple periods based]

  // characters [main, secondary, antagonist, incidental]

  // contextType historical | adapted

  // genderLabels [novel tale comedy etc..]

  // historySize long | medium | short

  // chapters [content]
}

export const StorativaSchema = SchemaFactory.createForClass(Storativa);

// TODO ??? what means this
// StorativaSchema.index({ userId: 1, createdAt: -1, _id: -1 });
