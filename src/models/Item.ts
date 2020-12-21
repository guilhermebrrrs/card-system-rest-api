import mongoose, { Schema } from 'mongoose'
import { Product, ProductDBModel } from './'

const itemSchema = new Schema(
	{
		tenant_id: { type: String, required: true },
		restaurant_id: { type: String, required: true },
		item: { type: ProductDBModel, required: true },
		added_by: { type: String, required: true },
		item_amount: { type: Number, required: true },
	},
	{ collection: 'Items', timestamps: true }
)

export const ItemDBModel = mongoose.model('Item', itemSchema)

export interface Item {
	_id?: string
	tenant_id: string
	restaurant_id: string
	item: Product
	added_by: string
	item_amount: number
}
