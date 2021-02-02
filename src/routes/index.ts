import express from 'express'
import { categoriesRouter } from './categories'
import { adultsRouter } from './adults'
import { kidsRouter } from './kids'
import { slippersRouter } from './slippers'
import { cardRouter } from './cards'
import { healthRouter } from './health'
import { authRouter } from './auth'
import { toysRouter } from './toys'
import { profileRouter } from './profile'

export interface IRoute {
  endpoint: string
  router: express.Router
}

const root: express.Router = express.Router()
root.get('/', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, DELETE')
  res.send(200)
})

export const routes: Array<IRoute> = [
  { endpoint: '/', router: root },
  { endpoint: '/health', router: healthRouter },
  { endpoint: '/categories', router: categoriesRouter },
  { endpoint: '/adult', router: adultsRouter },
  { endpoint: '/kids', router: kidsRouter },
  { endpoint: '/slippers', router: slippersRouter },
  { endpoint: '/cards', router: cardRouter },
  { endpoint: '/auth', router: authRouter },
  { endpoint: '/toys', router: toysRouter },
  { endpoint: '/profile', router: profileRouter },
]
