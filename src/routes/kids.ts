import express from 'express'
import { Cards } from '../models/cards'

export const kidsRouter: express.Router = express.Router()
kidsRouter.get(
  '/',
  async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const kids = await Cards.find({ category: 'kids' })
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.json(kids)
  },
)
