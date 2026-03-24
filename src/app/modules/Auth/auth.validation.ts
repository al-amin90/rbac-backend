import z from 'zod'

const loginValidationSchema = z.object({
  body: z.object({
    id: z.string({ required_error: 'Id is required' }),
    password: z.string({ required_error: 'Password is required' }),
  }),
})

const changePasswordValidationSchema = z.object({
  body: z.object({
    oldPassword: z.string({ required_error: 'Old Password is required' }),
    newPassword: z.string({ required_error: 'New Password is required' }),
  }),
})

const refreshTokenValidationSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({ required_error: 'Refresh Token is required' }),
  }),
})

// export const loginSchema = z.object({
//   email: z.string().email(),
//   password: z.string().min(6),
// });

// export const registerSchema = z.object({
//   firstName: z.string().min(1),
//   lastName: z.string().min(1),
//   email: z.string().email(),
//   password: z.string().min(8),
//   roleName: z.enum(['admin', 'manager', 'agent', 'customer']),
//   phone: z.string().optional(),
//   department: z.string().optional(),
// });

// export const changePasswordSchema = z.object({
//   currentPassword: z.string().min(6),
//   newPassword: z.string().min(8),
// });

export const authValidation = {
  loginValidationSchema,
  changePasswordValidationSchema,
  refreshTokenValidationSchema,
}
