import mongoose from 'mongoose'
import { IGenericErrorMessage } from '../interfaces/error'

export type IGenericErrorResponse = {
  statusCode: number
  message: string
  errorMessage: IGenericErrorMessage[]
}

const handleValidationError = (
  err: mongoose.Error.ValidationError,
): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = Object.values(err.errors).map(
    (el: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: el?.path,
        message: el?.message,
      }
    },
  )

  const statusCode: number = 400
  return {
    statusCode,
    message: 'validation error',
    errorMessage: errors,
  }
}

export default handleValidationError
