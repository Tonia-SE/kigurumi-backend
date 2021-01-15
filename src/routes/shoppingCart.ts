import express from 'express'
import { ShoppingCart } from '../models/shoppingCard'

export const shoppingCartRouter: express.Router = express.Router()
shoppingCartRouter.get(
    '/',
    async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const shoppingCart = await ShoppingCart.find({})
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
        res.json(shoppingCart)
    },
)
