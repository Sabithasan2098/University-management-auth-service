import express from 'express';
import validateRequestWithZod from '../../middleware/requestValidateZod';
import { AcademicSemesterValidationWithZod } from './academicSemester.zodValidation';

const router = express.Router();
router.post(
  '/createUser',
  validateRequestWithZod(
    AcademicSemesterValidationWithZod.createAcademicSemesterZodSchema,
  ),
  //   userController.createUser,
);

export const userRoutes = router;
