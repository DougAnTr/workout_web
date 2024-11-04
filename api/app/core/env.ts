import { z } from 'zod';

const booleanSchema = z
  .enum(['true', 'false'])
  .transform(value => value === 'true');

const EnvSchema = z.object({
  DATABASE_URL: z
    .string({ required_error: 'A database connection string is required' })
    .url()
    .min(3),
  NODE_ENV: z.enum(['development']).default('development'),
  PORT: z.coerce.number().positive(),
  JWT_SECRET: z.string().min(3),
  JWT_EXPIRES_IN: z.string(),
  AUTH_COOKIE_NAME: z.string(),
  AUTH_COOKIE_SAME_SITE: z.enum(['lax', 'strict', 'none']),
  AUTH_COOKIE_HTTP_ONLY: booleanSchema,
  AUTH_COOKIE_SECURE: booleanSchema,
});

export default EnvSchema.parse(process.env);
