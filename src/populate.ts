import mongoose from 'mongoose'
import { generateCategories } from './controllers/categories'

async function start() {
    try {
        await mongoose.connect('mongodb://devuser:qwerty123@127.0.0.1:27017/devdb', {
            useNewUrlParser: true,
            useFindAndModify: false,
        })
        generateCategories()
    } catch (e) {
        console.log(e)
    }
}

start()
