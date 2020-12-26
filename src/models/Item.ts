import mongoose, { Schema } from 'mongoose'
import { Product, ProductSchema } from './'

export const ItemSchema = mongoose.model(
	'Item',
	new Schema(
		{
			tenant_id: { type: String, required: true },
			restaurant_id: { type: String, required: true },
			item: { type: ProductSchema, required: true },
			added_by: { type: String, required: true },
			item_amount: { type: Number, required: true },
		},
		{ collection: 'Items', timestamps: true }
	)
)

export interface Item {
	_id?: string
	tenant_id: string
	restaurant_id: string
	item: Product
	added_by: string
	item_amount: number
}
