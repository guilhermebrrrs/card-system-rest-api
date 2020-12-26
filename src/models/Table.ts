import mongoose, { Schema } from 'mongoose'

export const TableSchema = mongoose.model(
	'Table',
	new Schema(
		{
			tenant_id: { type: String, required: true },
			restaurant_id: { type: String, required: true },
			number: { type: Number, required: true },
			seats: { type: Number, required: true },
			is_available: { type: Boolean, required: true },
		},
		{ collection: 'Tables', timestamps: true }
	)
)

export interface Table {
	_id?: string
	tenant_id: string
	restaurant_id: string
	number: number
	seats: number
	is_available: boolean
}
