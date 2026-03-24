/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Application, Request, Response } from 'express'

import cors from 'cors'
import userRouter from './app/modules/user/user.route'
import GlobalErrorHandler from './app/middlewares/GlobalErrorHandler'
import NotFound from './app/middlewares/NotFound'
import router from './app/routes'
import cookieParser from 'cookie-parser'
import config from './app/config'

const app: Application = express()

// parsers
app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: ['localhost:3000'] }))

// all application route here
app.use('/api/v1', router)

app.get('/', (req: Request, res: Response) => {
  res.send(`app listening on port ${config.port}`)
})

// global error handler
app.use(GlobalErrorHandler)
app.use(NotFound)

export default app
