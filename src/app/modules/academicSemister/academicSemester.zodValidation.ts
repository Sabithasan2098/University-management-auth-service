import { z } from 'zod';
import {
  academicSemesterCode,
  academicSemesterMonth,
  academicSemesterTitle,
} from './academicSemester.constant';

const createAcademicSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum(
      [...academicSemesterTitle] as [string, ...string[]], //enum simplicity of zod
      {
        required_error: 'Title is required',
      },
    ),

    year: z.number({
      required_error: 'Year is required',
    }),

    code: z.enum(
      [...academicSemesterCode] as [string, ...string[]], //enum simplicity of zod
      {
        required_error: 'Code is required',
      },
    ),

    startMonth: z.enum(
      [...academicSemesterMonth] as [string, ...string[]], //enum simplicity of zod
      {
        required_error: 'Start month is required',
      },
    ),

    endMonth: z.enum(
      [...academicSemesterMonth] as [string, ...string[]], //enum simplicity of zod
      {
        required_error: 'End month is required',
      },
    ),
  }),
});

export const AcademicSemesterValidationWithZod = {
  createAcademicSemesterZodSchema,
};
