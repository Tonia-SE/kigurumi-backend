import express from 'express'
import { categoriesRouter } from './categories'
import { healthRouter } from './health'

export interface IRoute {
    endpoint: string
    router: express.Router
}

export const routes: Array<IRoute> = [
    { endpoint: '/health', router: healthRouter },
    { endpoint: '/categories', router: categoriesRouter },
]
