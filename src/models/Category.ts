import mongoose, { Schema } from 'mongoose'

export const CategorySchema = mongoose.model(
	'Category',
	new Schema(
		{
			tenant_id: { type: String, required: true },
			restaurant_id: { type: String, required: true },
			name: { type: String, required: true },
			description: { type: String, required: true },
		},
		{ collection: 'Categories', timestamps: true }
	)
)

export interface Category {
	_id?: string
	tenant_id: string
	restaurant_id: string
	name: string
	description: string
}
