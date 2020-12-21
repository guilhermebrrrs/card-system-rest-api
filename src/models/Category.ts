import mongoose, { Schema } from 'mongoose'

const categorySchema = new Schema(
	{
		tenant_id: { type: String, required: true },
		restaurant_id: { type: String, required: true },
		name: { type: String, required: true },
		description: { type: String, required: true },
	},
	{ collection: 'Categories', timestamps: true }
)

export const CategoryDBModel = mongoose.model('Category', categorySchema)

export interface Category {
	_id?: string
	tenant_id: string
	restaurant_id: string
	name: string
	description: string
}
