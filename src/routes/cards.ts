import express from 'express'
import { Cards } from '../models/cards'

export const cardRouter: express.Router = express.Router()
cardRouter.get(
  '/',
  async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    let filter = {}
    if (req.query._id !== undefined) {
      filter = { _id: req.query._id }
    }
    const cards = await Cards.find(filter)
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.json(cards)
  },
)
