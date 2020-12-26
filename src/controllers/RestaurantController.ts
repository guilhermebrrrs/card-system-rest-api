import { Restaurant, RestaurantSchema } from '../models'

export class RestaurantController {
	static async create(obj: Restaurant) {
		return await RestaurantSchema.create(obj)
	}

	static async findAll() {
		return await RestaurantSchema.find()
	}

	static async findById(_id: string) {
		return await RestaurantSchema.findById(_id)
	}

	static async update(_id: string, obj: Restaurant) {
		return await RestaurantSchema.findByIdAndUpdate(_id, obj).then((data) => {
			return data?._id
		})
	}

	static async delete(_id: string) {
		return await RestaurantSchema.findByIdAndDelete(_id).then((data) => {
			return data?._id
		})
	}
}
