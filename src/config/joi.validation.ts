import { z } from 'zod';

export const zodValidationSchema = z.object({
  NODE_ENV: z
    .enum(['dev', 'prod', 'local'])
    .default('local'),
  PORT: z.coerce.number().default(3000),
  MONGODB_DATABASE: z.string(),
  MONGODB_PORT: z.string(),
  MONGODB_URI: z.string(),
});
