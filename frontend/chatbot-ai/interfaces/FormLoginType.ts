import { z } from 'zod';

export const formLoginType = z.object({
  Email: z.string().email('your email is not valid').optional(),
  Password: z.string().min(8, 'your password must have at LEAST 8 characters')
    .optional,
});

export type FormLoginType = z.infer<typeof formLoginType>;
