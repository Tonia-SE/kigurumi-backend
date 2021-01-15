import mongoose, { Schema, Document } from 'mongoose'

export interface IShoppingCart extends Document {
    amount: [
        [string, number],
        [string, number],
        [string, number],
        [string, number],
        [string, number],
    ]
}

export const ShoppingCartSchema: Schema = new Schema({
    amount: { type: Array, required: true },
})

// Export the model and return your IUser interface
export const ShoppingCart = mongoose.model<IShoppingCart>('ShoppingCart', ShoppingCartSchema)
