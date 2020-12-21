import mongoose, { Schema } from 'mongoose'

const tableSchema = new Schema(
	{
		tenant_id: { type: String, required: true },
		restaurant_id: { type: String, required: true },
		number: { type: Number, required: true },
		seats: { type: Number, required: true },
		is_available: { type: Boolean, required: true },
	},
	{ collection: 'Tables', timestamps: true }
)

export const TableDBModel = mongoose.model('Table', tableSchema)

export interface Table {
	_id?: string
	tenant_id: string
	restaurant_id: string
	number: number
	seats: number
	is_available: boolean
}
