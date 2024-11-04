import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';
import { z } from 'zod';
import { CreateUserService } from '../../user/services/CreateUser.service';

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&-_~^+=`|{}[\]:;"'<>,.?/])[A-Za-z\d@$!%*?&-_~^+=`|{}[\]:;"'<>,.?/]{8,}$/;

const signUpSchema = z.object({
  name: z.string({ required_error: 'Name is required' }),
  email: z.string({ required_error: 'Email is required' }).email(),
  password: z
    .string({ required_error: 'Password is required' })
    .regex(
      passwordRegex,
      'Password must be at least 8 characters and include one uppercase letter, one lowercase letter, one number, and one special character',
    ),
});

type SignUpParams = z.infer<typeof signUpSchema>;

@injectable()
export class SignupService {
  constructor(
    @inject('CreateUserService')
    private createUserService: CreateUserService,
  ) {}

  async execute(params: SignUpParams) {
    const validationResult = signUpSchema.safeParse(params);

    if (!validationResult.success) {
      return { error: validationResult.error };
    }

    const { name, email, password } = validationResult.data;

    const hashedPassword = await hash(password, 10);

    const user = await this.createUserService.execute({
      name,
      email,
      password: hashedPassword,
    });

    return { data: user };
  }
}
