import express from 'express';
import validateRequestWithZod from '../../middleware/requestValidateZod';
import { AcademicSemesterValidationWithZod } from './academicSemester.zodValidation';
import { AcademicSemesterController } from './academicSemester.controller';

const router = express.Router();
router.post(
  '/createAcademicSemester',
  validateRequestWithZod(
    AcademicSemesterValidationWithZod.createAcademicSemesterZodSchema,
  ),
  AcademicSemesterController.createAcademicSemester,
);

export const academicSemesterRoutes = router;
