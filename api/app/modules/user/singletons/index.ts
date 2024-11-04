import { container } from 'tsyringe';
import { UserRepository } from '../User.repository';
import { CreateUserService } from '../services/CreateUser.service';
import { IUserRepository } from '../types/IUserRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton('CreateUserService', CreateUserService);
