import { z } from 'zod';

export const createPostSchema = z.object({
  content: z
    .string()
    .min(1, 'Content is required')
    .max(255, 'Content must not exceed 255 characters')
});

export type CreatePostSchemaType = z.infer<typeof createPostSchema>;
