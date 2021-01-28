import express from 'express'
import { Categories } from '../models/categories'

export const categoriesRouter: express.Router = express.Router()

categoriesRouter.options(
  '/',
  async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods: OPTIONS')
    res.send(200)
  },
)

categoriesRouter.get(
  '/',
  async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const categories = await Categories.find({})
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.json(categories)
  },
)
