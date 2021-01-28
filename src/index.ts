import 'make-promises-safe'
import express from 'express'
import mongoose from 'mongoose'
import 'dotenv-defaults/config'
import bodyParser from 'body-parser'
import { routes, IRoute } from './routes'

const appPort = process.env.PORT
const mongoUrl = process.env.MONGO_URL ? process.env.MONGO_URL : 'mongo://localhost:27017/test'
const staticRoot = process.env.STATIC_ROOT ? process.env.STATIC_ROOT : '/home/app/public'
const app: express.Application = express()

app.use(bodyParser.json())
app.use(
  '/static',
  express.static(staticRoot),
)
routes.forEach((route: IRoute) => {
  app.use(route.endpoint, route.router)
})

async function start() {
  try {
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useFindAndModify: false,
    })
    app.listen(appPort, () => {
      console.log(`App is listening on port ${appPort}!`)
    })
  } catch (e) {
    console.log(e)
  }
}

start()
