import mongoose, { Schema } from 'mongoose'
import { Item, ItemDBModel } from './'

const cardSchema = new Schema(
	{
		tenant_id: { type: String, required: true },
		restaurant_id: { type: String, required: true },
		table_number: { type: Number, required: true },
		consumer_name: { type: String, required: true },
		items: { type: [ItemDBModel], required: true },
		total: { type: Number, required: true },
		closed: { type: Boolean, default: false },
	},
	{ collection: 'Cards', timestamps: true }
)

export const CardDBModel = mongoose.model('Card', cardSchema)

export interface Card {
	_id?: string
	tenant_id: string
	restaurant_id: string
	table_number: number
	consumer_name: string
	items: Array<Item>
	total: number
	closed: boolean
}
