import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { errorLogger, logger } from './shered/logger'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('Database connection successful')
    app.listen(config.port, () => {
      logger.info(`Example app listening on port ${config.port}`)
    })
  } catch (error) {
    errorLogger.error('Failed to connect database', error)
  }
}

main()
