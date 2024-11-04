import { getModelForClass } from '@typegoose/typegoose';
import { BaseRepository } from '../shared/database/Base.repository';
import { User } from './User.model';

export class UserRepository extends BaseRepository<User> {
  constructor() {
    super(getModelForClass(User));
  }
}
