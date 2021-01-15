import mongoose, { Schema, Document } from 'mongoose'

export interface ICard extends Document {
    category: string
    imageUrl: string
    title: string
    amount: [
        [string, number],
        [string, number],
        [string, number],
        [string, number],
        [string, number],
    ]
    price: number
}

export const CardSchema: Schema = new Schema({
    category: { type: String, required: true },
    imageUrl: { type: String, required: true },
    title: { type: String, required: true, unique: true },
    //amount: { type: Object, required: true, unique: false },
    amount: { type: Array, required: true },
    price: { type: Number, required: true },
})

// Export the model and return your IUser interface
export const Cards = mongoose.model<ICard>('Cards', CardSchema)
