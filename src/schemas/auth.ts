import { z } from 'zod';

export const loginUserSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required')
});

export type LoginUserSchemaType = z.infer<typeof loginUserSchema>;

export const signupUserSchema = z.object({
  first_name: z
    .string()
    .min(1, 'First name is required')
    .max(255, 'First name must not exceed 255 characters'),
  last_name: z
    .string()
    .min(1, 'Last name is required')
    .max(255, 'Last name must not exceed 255 characters'),
  username: z
    .string()
    .min(5, 'Username must be atleast 5 characters')
    .max(60, 'Username must not exceed 60 characters'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Must be a valid email')
    .max(255, 'Email must not exceed 255 characters'),
  password: z
    .string()
    .min(8, 'Password must be atleast 8 characters')
    .max(60, 'Password must not exceed 60 characters')
});

export type SignupUserSchemaType = z.infer<typeof signupUserSchema>;
