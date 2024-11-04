import { Model } from 'mongoose';
import { User } from '../User.model';

export interface IUserRepository {
  model: Model<User>;
}
