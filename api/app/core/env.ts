import { z } from 'zod';

const EnvSchema = z.object({
  DATABASE_URL: z
    .string({ required_error: 'A database connection string is required' })
    .url()
    .min(3),
  NODE_ENV: z.enum(['development']).default('development'),
  PORT: z.coerce.number().positive(),
});

export default EnvSchema.parse(process.env);

