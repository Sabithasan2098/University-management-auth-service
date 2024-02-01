import express, { Application, Request, Response } from 'express'
const app: Application = express()
import cors from 'cors'

// parse data --> middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// test
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
