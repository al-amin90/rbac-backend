import { Router } from 'express'
import studentRouter from '../modules/student/student.route'
import userRouter from '../modules/user/user.route'
import { authRouter } from '../modules/Auth/auth.route'

const router = Router()

const moduleRouters = [
  {
    path: '/students',
    route: studentRouter,
  },
  {
    path: '/users',
    route: userRouter,
  },
  {
    path: '/auth',
    route: authRouter,
  },
]

moduleRouters.forEach(route => {
  router.use(route.path, route.route)
})

export default router
