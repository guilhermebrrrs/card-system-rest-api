import mongoose, { Schema } from 'mongoose'

const productSchema = new Schema(
	{
		tid: { type: String, required: true },
		rid: { type: String, required: true },
		cid: { type: String, required: true },
		name: { type: String, required: true },
		price: { type: Number, required: true },
	},
	{ collection: 'Products', timestamps: true }
)

export const ProductModel = mongoose.model('Product', productSchema)

export interface IProduct {
	_id?: string
	tid: string
	rid: string
	cid: string
	name: string
	price: number
}
