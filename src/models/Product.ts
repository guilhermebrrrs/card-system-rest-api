import mongoose, { Schema } from 'mongoose'

const productSchema = new Schema(
	{
		tenant_id: { type: String, required: true },
		restaurant_id: { type: String, required: true },
		category_id: { type: String, required: true },
		name: { type: String, required: true },
		price: { type: Number, required: true },
	},
	{ collection: 'Products', timestamps: true }
)

export const ProductDBModel = mongoose.model('Product', productSchema)

export interface Product {
	_id?: string
	tenant_id: string
	restaurant_id: string
	category_id: string
	name: string
	price: number
}
