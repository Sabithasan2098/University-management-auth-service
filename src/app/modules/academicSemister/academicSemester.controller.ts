import { RequestHandler } from 'express';
import { AcademicSemesterService } from './academicSemester.service';

const createAcademicSemester: RequestHandler = async (req, res, next) => {
  try {
    const { ...academicSemester } = req.body;
    const result =
      await AcademicSemesterService.createAcademicSemester(academicSemester);
    res.status(200).json({
      success: true,
      message: 'creating academicSemester successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const AcademicSemesterController = { createAcademicSemester };
