import mongoose, { Schema, Document } from 'mongoose'

export interface IWish extends Document {
  user: string
  id: string
  size: string
}

export const WishSchema: Schema = new Schema({
  user: { type: String, required: true },
  id: { type: String, required: true },
  size: { type: String, required: true },
})

export const Wish = mongoose.model<IWish>('Wish', WishSchema)
