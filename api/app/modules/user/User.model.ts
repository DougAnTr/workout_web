import { prop } from '@typegoose/typegoose';
import { ObjectId } from 'mongoose';

export class User {
  readonly _id: ObjectId;

  @prop()
  name: string;

  @prop()
  email: string;

  @prop({ select: false })
  password: string;
}
