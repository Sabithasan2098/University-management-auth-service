import express, { Application } from 'express';
const app: Application = express();
import cors from 'cors';
import globalErrorHandler from './app/middleware/globalErrorHandelar';
import { userRoutes } from './app/modules/users/user.route';
import { academicSemesterRoutes } from './app/modules/academicSemister/academicSemester.route';
// parse data --> middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/academicSemester', academicSemesterRoutes);

// test
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   throw new Error('Testing errorlogger');
// });
// global error handler
app.use(globalErrorHandler);

export default app;
