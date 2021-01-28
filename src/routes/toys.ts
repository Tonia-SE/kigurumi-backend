import express from 'express'
import { Cards } from '../models/cards'

export const toysRouter: express.Router = express.Router()

toysRouter.options(
  '/',
  async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods: OPTIONS')
    res.send(200)
  },
)

toysRouter.get(
  '/',
  async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const toys = await Cards.find({ category: 'toys' })
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.json(toys)
  },
)
