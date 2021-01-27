import express from 'express'
import { Cards } from '../models/cards'

export const slippersRouter: express.Router = express.Router()
slippersRouter.get(
  '/',
  async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const slippers = await Cards.find({ category: 'slippers' })
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.json(slippers)
  },
)
