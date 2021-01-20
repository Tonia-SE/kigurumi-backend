import express from 'express'
import { IUser, Users } from '../models/users'

export const authRouter: express.Router = express.Router()

authRouter.post(
    '/register',
    async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
        if (req.body.user === undefined || req.body.password === undefined) {
            res.json({ result: `Wrong request. Can't parse user and password from payload` })
            res.status(404)
        } else {
            const foundUsers: Array<IUser> = await Users.find({ username: req.body.user })
            if (foundUsers.length === 0) {
                Users.insertMany({
                    username: req.body.user,
                    password: req.body.password,
                    token: '',
                })
                res.json({ result: 'User was registered' })
                res.status(200)
            } else {
                res.json({ result: 'Such username is already taken' })
                res.status(403)
            }
        }
    },
)

authRouter.post(
    '/login',
    async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
        if (req.body.user === undefined || req.body.password === undefined) {
            res.json({ result: `Wrong request. Can't parse user and password from payload` })
            res.status(404)
        } else {
            const foundUsers: Array<IUser> = await Users.find({
                username: req.body.user,
                password: req.body.password,
            })
            if (foundUsers.length === 0) {
                res.json({ result: 'Wrong username or password' })
                res.status(403)
            } else {
                res.json({ result: 'Logged in' })
                res.status(200)
                //TBD add token generation here
                //Users.updateOne({username: req.body.user, password:req.body.password}, {$set: {token: 'a;lkjg;alkjhwkfl'}});
            }
        }
    },
)
