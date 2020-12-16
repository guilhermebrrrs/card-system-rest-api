import mongoose, { Schema } from 'mongoose'

const restaurantSchema = new Schema(
	{
		tid: { type: String, required: true },
		name: { type: String, required: true },
		address: {
			address: { type: String, required: true },
			number: { type: String, required: true },
			district: { type: String, required: true },
			city: { type: String, required: true },
			state: { type: String, required: true },
		},
	},
	{ collection: 'Restaurants', timestamps: true }
)

export const RestaurantModel = mongoose.model('Restaurant', restaurantSchema)

export interface IRestaurant {
	_id?: string
	tid: string
	name: string
	address: {
		address: string
		number: string
		district: string
		city: string
		state: string
	}
}
