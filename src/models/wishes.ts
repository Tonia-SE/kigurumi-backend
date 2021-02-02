import mongoose, { Schema, Document } from 'mongoose'

export interface IWish extends Document {  
  imageUrl: string
  titleEng: string
  titleRu: string
  price: string
  id: string
  size: string
  user: string
}

export const WishSchema: Schema = new Schema({
  user: { type: String, required: true },
  id: { type: String, required: true },
  size: { type: String, required: true },
  imageUrl: { type: String, required: true },
  titleEng: { type: String, required: true },
  titleRu: { type: String, required: true },
  price: { type: String, required: true }
})


export const Wish = mongoose.model<IWish>('Wish', WishSchema)
