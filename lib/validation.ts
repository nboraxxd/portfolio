import { z } from 'zod'

export const contactSchema = z.object({
  email: z.string().email('Invalid email address'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters long')
    .max(500, 'Message must be at most 500 characters long'),
})
