import express, { Application } from 'express';
const app: Application = express();
import cors from 'cors';
import globalErrorHandler from './app/middleware/globalErrorHandelar';
import routes from './app/routes';
// parse data --> middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// optimize routes
app.use('/api/v1/', routes);

// test
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   throw new Error('Testing errorlogger');
// });
// global error handler
app.use(globalErrorHandler);

export default app;
