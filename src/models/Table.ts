import mongoose, { Schema } from 'mongoose'

const tableSchema = new Schema(
	{
		tid: { type: String, required: true },
		rid: { type: String, required: true },
		number: { type: Number, required: true },
		seats: { type: Number, required: true },
		is_available: { type: Boolean, required: true },
	},
	{ collection: 'Tables', timestamps: true }
)

export const TableModel = mongoose.model('Table', tableSchema)

export interface ITable {
	_id?: string
	tid: string
	rid: string
	number: number
	seats: number
	is_available: boolean
}
