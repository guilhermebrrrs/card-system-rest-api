import mongoose, { Schema } from 'mongoose'

export const RestaurantSchema = mongoose.model(
	'Restaurant',
	new Schema(
		{
			tenant_id: { type: String, required: true },
			name: { type: String, required: true },
			address: {
				addr_name: { type: String, required: true },
				number: { type: String, required: true },
				district: { type: String, required: true },
				city: { type: String, required: true },
				addr_state: { type: String, required: true },
			},
		},
		{ collection: 'Restaurants', timestamps: true }
	)
)

export interface Restaurant {
	_id?: string
	tenant_id: string
	name: string
	address: {
		addr_name: string
		number: string
		district: string
		city: string
		addr_state: string
	}
}
