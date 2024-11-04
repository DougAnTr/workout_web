import { modelOptions, prop } from '@typegoose/typegoose';
import { ObjectId } from 'mongoose';
@modelOptions({
  schemaOptions: {
    timestamps: true,
    versionKey: false,
  },
})
export class User {
  readonly _id: ObjectId;

  @prop({ required: true, type: String })
  name: string;

  @prop({ required: true, type: String })
  email: string;

  @prop({ select: false, type: String })
  password: string;
}
