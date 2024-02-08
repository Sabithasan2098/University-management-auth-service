import { NextFunction, Request, RequestHandler, Response } from 'express';
import { userService } from './user.service';
import catchAsync from '../../../shered/catchAsync';
import sendResponse from '../../../shered/sendResponse';
import status from 'http-status';

const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body;
    const result = await userService.createUser(user);
    next();
    // using sendResponse
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'creating user successfully',
      data: result,
    });
  },
);

export const userController = { createUser };
