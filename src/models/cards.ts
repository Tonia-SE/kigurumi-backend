import mongoose, { Schema, Document } from 'mongoose'

export interface ICard extends Document {
  category: string
  imageUrl: string
  titleEng: string
  titleRu: string
  amount: [[string, number], [string, number], [string, number], [string, number], [string, number]]
  price: number
}

export const CardSchema: Schema = new Schema({
  category: { type: String, required: true },
  imageUrl: { type: String, required: true },
  titleEng: { type: String, required: true, unique: true },
  titleRu: { type: String, required: true, unique: true },
  amount: { type: Array, required: true },
  price: { type: Number, required: true },
})

export const Cards = mongoose.model<ICard>('Cards', CardSchema)
