import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type Role = 'user' | 'superuser' | 'admin';

@ObjectType()
@Schema({ timestamps: true })
export class User extends Document {
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

  // fullName: Joe Doe
  @Prop({ required: true, trim: true })
  @Field(() => String)
  fullName!: string;

  // email: user@example.com
  @Prop({ unique: true, required: true, trim: true })
  @Field(() => String)
  email!: string;

  // password: bcrypt salt 12 etc
  @Prop({ required: true, trim: true })
  // @Field(() => String)
  password!: string;

  // emailVerified: bool
  @Prop({ type: Boolean, required: true, default: false })
  @Field(() => Boolean)
  emailVerified!: boolean;

  // roles: ['admin', 'superUser', 'user']
  @Prop({
    type: [String],
    required: true,
    default: ['user'],
    enum: ['user', 'superuser', 'admin'],
  })
  @Field(() => [String])
  roles!: Role[];

  // isActive: bool
  @Prop({ type: 'boolean', required: true, default: true })
  @Field(() => Boolean)
  isActive!: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
