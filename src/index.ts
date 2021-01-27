import 'make-promises-safe'
import express from 'express'
import mongoose from 'mongoose'
import 'dotenv-defaults/config'
import bodyParser from 'body-parser'
import { routes, IRoute } from './routes'

const appPort = process.env.PORT
const app: express.Application = express()

app.use(bodyParser.json())
app.use(
  '/static',
  express.static('/home/antonina/Desktop/src/A-generation/kigurumi-backend/public'),
)
routes.forEach((route: IRoute) => {
  app.use(route.endpoint, route.router)
})

async function start() {
  try {
    await mongoose.connect('mongodb://devuser:qwerty123@127.0.0.1:27017/devdb', {
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
