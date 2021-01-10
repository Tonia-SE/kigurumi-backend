import mongoose, { Schema, Document } from 'mongoose'

export interface ICategory extends Document {
    title: string,
    color: string
}

export const CategorySchema: Schema = new Schema({
    title: { type: String, required: true, unique: true },
    color: { type: String, required: true, unique: true }
})

// Export the model and return your IUser interface
export const Categories = mongoose.model<ICategory>('Category', CategorySchema)
