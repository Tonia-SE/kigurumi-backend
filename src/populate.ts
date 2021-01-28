import mongoose from 'mongoose'
import { generateCards, generateCategories } from './controllers/categories'

const mongoUrl = process.env.MONGO_URL
  ? process.env.MONGO_URL
  : 'mongodb://devuser:qwerty123@127.0.0.1:27017/devdb'

async function start() {
  try {
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useFindAndModify: false,
    })
    generateCards()
    generateCategories()
  } catch (e) {
    console.log(e)
  }
}

start()
