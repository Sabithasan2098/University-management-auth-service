import { IAcademicSemester } from './academicSemester.interface';
import { academicSemester } from './academicSemesterSchema&model';

const createAcademicSemester = async (
  payload: IAcademicSemester,
): Promise<IAcademicSemester> => {
  const result = await academicSemester.create(payload);
  return result;
};
export const AcademicSemesterService = {
  createAcademicSemester,
};
