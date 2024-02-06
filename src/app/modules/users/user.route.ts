import express from 'express';
import { userController } from './user.controller';
import validateRequestWithZod from '../../middleware/requestValidateZod';
import { userValidationWithZod } from './user.zodValidation';

const router = express.Router();
router.post(
  '/createUser',
  validateRequestWithZod(userValidationWithZod.createUserZodSchema),
  userController.createUser,
);

export const userRoutes = router;
