import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../types/IUserRepository';
import { User } from '../User.model';

@injectable()
export class CreateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}
  async execute(data: Omit<User, '_id'>) {
    const result = await this.userRepository.model.create(data);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...user } = result.toObject();

    return user;
  }
}
