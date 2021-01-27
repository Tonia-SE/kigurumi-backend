import mongoose, { Schema, Document } from 'mongoose'

export interface ICategory extends Document {
  titleEng: string
  titleRu: string
  color: string
}

export const CategorySchema: Schema = new Schema({
  titleEng: { type: String, required: true, unique: true },
  titleRu: { type: String, required: true, unique: true },
  color: { type: String, required: true, unique: true },
})

export const Categories = mongoose.model<ICategory>('Category', CategorySchema)
