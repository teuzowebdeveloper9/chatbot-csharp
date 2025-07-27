import {z} from 'zod';

export const HandleRegisterSchema = z.object({
  Name: z.string().min(5, "your name must have at LEAST 5 characters"),
  Password: z.string().min(8, "your password must have at LEAST 8 characters"),
  Email: z.string().email("your email is not valid"),
})

export type HandleRegisterTypes = z.infer<typeof HandleRegisterSchema>;