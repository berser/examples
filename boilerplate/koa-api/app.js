import Koa from 'koa'
import logger from 'koa-logger'
import api from './api'
import { errorHandler } from './middlewares'
import env from './config/env'

const app = new Koa()

if (env !== 'test') {
  app.use(logger())
}

app.use(errorHandler)

api(app)

export default app
