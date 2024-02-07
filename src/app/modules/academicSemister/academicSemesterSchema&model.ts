import status from 'http-status';
import { Schema, model } from 'mongoose';
import {
  IAcademicSemester,
  academicSemesterModel,
} from './academicSemester.interface';
import {
  academicSemesterCode,
  academicSemesterMonth,
  academicSemesterTitle,
} from './academicSemester.constant';
import ApiError from '../../../error/apiError';

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      required: true,
      enum: academicSemesterTitle,
    },
    year: { type: Number, required: true },
    code: {
      type: String,
      required: true,
      enum: academicSemesterCode,
    },
    startMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonth,
    },
    endMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonth,
    },
  },
  { timestamps: true },
);

academicSemesterSchema.pre('save', async function (next) {
  const isExit = await academicSemester.findOne({
    title: this.title,
    year: this.year,
  });
  if (isExit) {
    throw new ApiError(status.CONFLICT, 'AcademicSemester is already exits !');
  }
  next();
});

export const academicSemester = model<IAcademicSemester, academicSemesterModel>(
  'academicSemester',
  academicSemesterSchema,
);
