import mongoose, { Schema } from 'mongoose'
import { Item, ItemSchema } from './'

export const CardSchema = mongoose.model(
	'Card',
	new Schema(
		{
			tenant_id: { type: String, required: true },
			restaurant_id: { type: String, required: true },
			table_number: { type: Number, required: true },
			consumer_name: { type: String, required: true },
			items: { type: [ItemSchema], required: true },
			total: { type: Number, required: true },
			closed: { type: Boolean, default: false },
		},
		{ collection: 'Cards', timestamps: true }
	)
)

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
