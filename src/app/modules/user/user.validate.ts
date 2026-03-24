import z from 'zod'

const createValidationSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  role: z.enum(['admin', 'manager', 'agent', 'customer']),
  managerId: z.string().optional(),
})

const updateValidationSchema = z.object({
  firstName: z.string().min(2).optional(),
  lastName: z.string().min(2).optional(),
  email: z.string().email().optional(),
  role: z.enum(['admin', 'manager', 'agent', 'customer']).optional(),
  isActive: z.boolean().optional(),
})

const assignPermissionsSchema = z.object({
  userId: z.string(),
  permissions: z.array(z.string()),
})

export const userValidation = {
  createValidationSchema,
  updateValidationSchema,
  assignPermissionsSchema,
}
