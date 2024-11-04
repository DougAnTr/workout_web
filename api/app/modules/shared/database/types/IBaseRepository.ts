import { Model } from 'mongoose';

export interface IBaseRepository<T> {
  model: Model<T>;
}
