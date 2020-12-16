import mongoose, { Schema } from 'mongoose'

const categorySchema = new Schema(
	{
		tid: { type: String, required: true },
		rid: { type: String, required: true },
		name: { type: String, required: true },
		description: { type: String, required: true },
	},
	{ collection: 'Categories', timestamps: true }
)

export const CategoryModel = mongoose.model('Category', categorySchema)

export interface ICategory {
	_id?: string
	tid: string
	rid: string
	name: string
	description: string
}
