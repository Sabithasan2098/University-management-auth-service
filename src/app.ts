import express, { Application, Request, Response } from 'express'
const app: Application = express()
import cors from 'cors'
import userService from './app/modules/users/user.service'
import userRouter from './app/modules/users/user.route'
// parse data --> middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// test
app.use('/api/v1/users', userRouter.router)

app.get('/', async (req: Request, res: Response) => {
  await userService.createUser({
    id: '999',
    role: 'student',
    password: '1234',
  })
  res.send(`Hello developers don't worry server is running`)
})

export default app
