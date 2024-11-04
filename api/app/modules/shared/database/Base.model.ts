import { modelOptions, prop } from '@typegoose/typegoose';
import { ObjectId } from 'mongoose';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class BaseModel {
  @prop()
  userId: ObjectId;

  @prop()
  createdAt: Date;

  @prop()
  updatedAt: Date;
}
