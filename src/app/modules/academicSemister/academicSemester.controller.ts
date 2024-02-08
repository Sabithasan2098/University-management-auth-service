import { NextFunction, Request, RequestHandler, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shered/catchAsync';
import sendResponse from '../../../shered/sendResponse';
import status from 'http-status';

const createAcademicSemester: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemester } = req.body;
    const result =
      await AcademicSemesterService.createAcademicSemester(academicSemester);
    next();
    // using sendResponse
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'creating academicSemester successfully',
      data: result,
    });
  },
);

export const AcademicSemesterController = { createAcademicSemester };
