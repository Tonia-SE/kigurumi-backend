import express from 'express'
import { Cards } from '../models/cards'

export const adultsRouter: express.Router = express.Router()
adultsRouter.get(
  '/',
  async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const adults = await Cards.find({ category: 'adults' })
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.json(adults)
  },
)
