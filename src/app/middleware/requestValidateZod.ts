import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';
// import { z } from 'zod'

const validateRequestWithZod =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
        cookies: req.cookies,
      });
      return next();
    } catch (err) {
      next(err);
    }
  };

export default validateRequestWithZod;
