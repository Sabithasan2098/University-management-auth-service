import ApiError from '../../../error/apiError';
import { academicSemesterTitleCodeMapper } from './academicSemester.constant';
import { IAcademicSemester } from './academicSemester.interface';
import { academicSemester } from './academicSemesterSchema&model';
import status from 'http-status';

const createAcademicSemester = async (
  payload: IAcademicSemester,
): Promise<IAcademicSemester> => {
  if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(
      status.BAD_REQUEST,
      'Invalid semester name or semester code',
    );
  }
  const result = await academicSemester.create(payload);
  return result;
};
export const AcademicSemesterService = {
  createAcademicSemester,
};
