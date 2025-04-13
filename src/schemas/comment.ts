import { z } from 'zod';

export const commentSchema = z.object({
  comment: z
    .string()
    .min(1, 'Comment is required')
    .max(255, 'Comment must not exceed 255 characters')
});

export type CommentSchemaType = z.infer<typeof commentSchema>;
