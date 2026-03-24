import { Router } from 'express'
import userController from './user.controller'
import { createStudentValidationSchema } from '../student/student.validate'
import validateRequest from '../../middlewares/validateRequest'
import auth from '../../middlewares/auth'
import { USER_ROLE } from './user.constant'

const router = Router()

router.post(
  '/create-student',
  auth(USER_ROLE.admin, USER_ROLE.faculty),
  validateRequest(createStudentValidationSchema),
  userController.createStudent,
)

const userRouter = router
export default userRouter
