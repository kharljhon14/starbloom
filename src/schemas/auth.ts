import { z } from 'zod';

export const loginUserSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Must be a valid email'),
  password: z.string().min(1, 'Password is required')
});

export type LoginUserSchemaType = z.infer<typeof loginUserSchema>;
