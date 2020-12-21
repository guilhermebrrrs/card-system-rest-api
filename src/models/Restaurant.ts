import mongoose, { Schema } from 'mongoose'

const restaurantSchema = new Schema(
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

export const RestaurantDBModel = mongoose.model('Restaurant', restaurantSchema)

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
