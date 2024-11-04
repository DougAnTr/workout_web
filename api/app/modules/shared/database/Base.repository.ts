import { Model } from 'mongoose';
import { injectable } from 'tsyringe';
import { IBaseRepository } from './types/IBaseRepository';

@injectable()
export class BaseRepository<T> implements IBaseRepository<T> {
  public model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }
}
