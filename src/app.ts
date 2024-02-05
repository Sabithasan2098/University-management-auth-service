import express, { Application, NextFunction, Request, Response } from 'express'
const app: Application = express()
import cors from 'cors'
import globalErrorHandler from './app/middleware/globalErrorHandelar'
import { userRoutes } from './app/modules/users/user.route'
// parse data --> middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users', userRoutes)

// test
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  throw new Error('Testing errorlogger')
})
// global error handler
app.use(globalErrorHandler)

export default app
