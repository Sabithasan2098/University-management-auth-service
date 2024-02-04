import { NextFunction, Request, Response } from 'express'
import config from '../../config'
import { IGenericErrorMessage } from '../../interfaces/error'
import handleValidationError from '../../error/handleValidationError'
import ApiError from '../../error/apiError'

const globalErrorHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let statusCode: number = 500
  let message: string = 'something went wrong !'
  let errorMessage: IGenericErrorMessage[] = []

  if (err.name === 'ValidationError') {
    const simplifiedError = handleValidationError(err)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessage = simplifiedError.errorMessage
  } else if (err instanceof ApiError) {
    statusCode = err?.statusCode
    message = err.message
    errorMessage = err?.message
      ? [
          {
            path: '',
            message: err?.message,
          },
        ]
      : []
  } else if (err instanceof Error) {
    message = err?.message
    errorMessage = err?.message
      ? [
          {
            path: '',
            message: err?.message,
          },
        ]
      : []
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessage,
    stack: config.env !== 'production' ? err?.stack : undefined,
  })

  next()
}

export default globalErrorHandler
