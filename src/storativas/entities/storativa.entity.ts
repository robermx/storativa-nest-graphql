import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType()
@Schema({ timestamps: true })
export class Storativa extends Document {
  // get _id: mongoId
  @Field(() => ID)
  get id(): string {
    return this._id.toHexString();
  }

  // get created date
  @Field(() => Date)
  get createdAt(): Date {
    return this.createdAt;
  }

  // get updated date
  @Field(() => Date)
  get updatedAt(): Date {
    return this.updatedAt;
  }

  // TODO: userId: mongoId

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

  // initialBasedDate: starts on: 2015/05/01 YYYY/MM/DD
  @Prop({ required: true, trim: true })
  @Field(() => String)
  basedDate!: string;

  // language es | en
  @Prop({ type: String, enum: ['es', 'en'], default: 'es', required: true })
  @Field(() => String)
  language!: 'es' | 'en';

  // status: {1: pending, 2: active, 3: completed, 4: inactive}
  @Prop({ required: true })
  @Field(() => Int)
  status!: number;

  //timeToComplete: 120: numberOfDays
  @Prop({ required: true })
  @Field(() => Int)
  timeToComplete!: number;

  // TODO: adaptedPeriods [multiple periods based]

  // TODO: characters [main, secondary, antagonist, incidental]

  // TODO: contextType historical | adapted

  // TODO: genderLabels [novel tale comedy etc..]

  // TODO: historySize long | medium | short

  // TODO: chapters [content]
}

export const StorativaSchema = SchemaFactory.createForClass(Storativa);

// TODO ??? what means this
// StorativaSchema.index({ userId: 1, createdAt: -1, _id: -1 });
