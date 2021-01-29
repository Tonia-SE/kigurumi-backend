import mongoose, { Schema, Document } from 'mongoose'

interface IPosition {
  title: string
  id: string
  size: string
  price: string
  quantity: number
}

export interface IOrder extends Document {
  user: string
  id: string
  date: string
  total: string
  positions: Array<IPosition>
}

export const OrderSchema: Schema = new Schema({
  user: { type: String, required: true, unique: false },
  id: { type: String, required: true, unique: false },
  date: { type: String, required: true, unique: false },
  total: { type: String, required: true, unique: false },
  positions: { type: Array, required: true, unique: false },
})

export const Order = mongoose.model<IOrder>('Order', OrderSchema)
