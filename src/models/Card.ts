import mongoose, { Schema } from 'mongoose'
import { IItem, ItemModel } from './'

const cardSchema = new Schema(
	{
		tid: { type: String, required: true },
		rid: { type: String, required: true },
		table_number: { type: Number, required: true },
		consumer_name: { type: String, required: true },
		item: { type: [ItemModel], required: true },
		total: { type: Number, required: true },
		closed: { type: Boolean, default: false },
	},
	{ collection: 'Cards', timestamps: true }
)

export const CardModel = mongoose.model('Card', cardSchema)

export interface ICard {
	_id?: string
	tid: string
	rid: string
	table_number: number
	consumer_name: string
	item: Array<IItem>
	total: number
	closed: boolean
}
