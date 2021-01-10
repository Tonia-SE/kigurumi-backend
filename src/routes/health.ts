import express from 'express'

export const healthRouter: express.Router = express.Router()
healthRouter.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.json({
        status: 'UP',
    })
    res.status(200)
})
