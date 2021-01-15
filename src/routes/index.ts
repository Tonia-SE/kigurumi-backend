import express from 'express'
import { categoriesRouter } from './categories'
import { adultsRouter } from './adults'
import { kidsRouter } from './kids'
import { slippersRouter } from './slippers'
import { cardRouter } from './cards'
import { shoppingCartRouter } from './shoppingCart'
import { healthRouter } from './health'

export interface IRoute {
    endpoint: string
    router: express.Router
}

export const routes: Array<IRoute> = [
    { endpoint: '/health', router: healthRouter },
    { endpoint: '/categories', router: categoriesRouter },
    { endpoint: '/adult', router: adultsRouter },
    { endpoint: '/kids', router: kidsRouter },
    { endpoint: '/slippers', router: slippersRouter },
    { endpoint: '/cards', router: cardRouter },
    { endpoint: '/shopping_cart', router: shoppingCartRouter },
]
