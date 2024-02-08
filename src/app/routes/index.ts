import express from 'express';
import { userRoutes } from '../modules/users/user.route';
import { academicSemesterRoutes } from '../modules/academicSemister/academicSemester.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/academicSemester',
    route: academicSemesterRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
