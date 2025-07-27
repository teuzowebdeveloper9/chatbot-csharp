import { z } from 'zod';

export const HandleLoginSchema = z.object({
  Email: z.string().email('your email is not valid'),
  Password: z.string().min(8, 'your password must have at LEAST 8 characters'),
});

export type HandleLoginTypes = z.infer<typeof HandleLoginSchema>;
