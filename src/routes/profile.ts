import express from 'express'
import { IOrder, Order } from '../models/orders'
import { IWish, Wish } from '../models/wishes'

export const profileRouter: express.Router = express.Router()


profileRouter.get(
  '/whish_list',
  async (req: express.Request, res: express.Response, next: express.NextFunction) => {    
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    let filter = {}
    if (req.query.user !== undefined) {
      filter = { user: req.query.user }
    }
    const orders = await Wish.find(filter)
    res.status(200)
    res.json(orders)
  },
)

profileRouter.options(
  '/wish_list',
  async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'OPTIONS, POST, DELETE')
    res.send(200)
  },
)

profileRouter.post(
  '/wish_list',
  async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    const user = req.body.user
    const id = req.body.id
    const size = req.body.size
    const titleEng = req.body.titleEng
    const titleRu = req.body.titleRu
    const price = req.body.price
    const imageUrl = req.body.imageUrl

    const foundWishes: Array<IWish> = await Wish.find({ user: user, id: id })
    if (!foundWishes.length) {
      Wish.insertMany({
        user: user,
        id: id,
        size: size,
        titleEng: titleEng,
        titleRu: titleRu,
        price: price,
        imageUrl: imageUrl,
      })
    }
    res.status(200)
    res.json({ result: 'Wish list were updated' })
  },
)

profileRouter.options(
  '/orders',
  async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'OPTIONS, POST, DELETE')
    res.sendStatus(200)
  },
)

profileRouter.post(
  '/orders',
  async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    const user = req.body.user
    const orderId = req.body.orderId
    const total = req.body.total
    const positions = req.body.positions
    const date = req.body.orderData
    const foundOrders: Array<IOrder> = await Order.find({ id: orderId, user: user })
    if (!foundOrders.length) {
      Order.insertMany({
        user: user,
        orderDate: date,
        total: total,
        positions: positions,
        orderId: orderId,
      })
      res.status(200)
      res.json({ result: 'Orders were updated' })
    } else {
      res.status(403)
      res.json({ result: 'Such order has already created' })
    }
  },
)

profileRouter.get(
  '/orders',
  async (req: express.Request, res: express.Response, next: express.NextFunction) => {    
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    let filter = {}
    if (req.query.user !== undefined) {
      filter = { user: req.query.user }
    }
    const orders = await Order.find(filter)
    res.status(200)
    res.json(orders)
  },
)

profileRouter.delete(
  '/orders',
  async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    const user = req.body.user
    const orderId = req.body.orderId
    Order.remove({ user: user, orderId: orderId }, () => {})
    res.status(200)
    res.json({ result: `Order №${orderId} was removed` })
  },
)

profileRouter.delete(
  '/wish_list',
  async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    const user = req.body.user
    const wishId = req.body.wishId
    const size = req.body.size
    Wish.remove({ user: user, id: wishId, size: size }, () => {})
    res.status(200)
    res.json({ result: 'Your wish was deleted' })
  },
)
