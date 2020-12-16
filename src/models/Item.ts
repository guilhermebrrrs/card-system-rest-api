import mongoose, { Schema } from 'mongoose'
import { IProduct, ProductModel } from './'

const itemSchema = new Schema(
	{
		tid: { type: String, required: true },
		rid: { type: String, required: true },
		item: { type: ProductModel, required: true },
		added_by: { type: String, required: true },
		amount: { type: Number, required: true },
	},
	{ collection: 'Items', timestamps: true }
)

export const ItemModel = mongoose.model('Item', itemSchema)

export interface IItem {
	_id?: string
	tid: string
	rid: string
	item: IProduct
	added_by: string
	amount: number
}
