import { Restaurant, RestaurantDBModel } from '../models'

export class RestaurantController {
	static async create(obj: Restaurant) {
		return await RestaurantDBModel.create(obj)
	}

	static async findAll() {
		return await RestaurantDBModel.find()
	}

	static async findById(_id: string) {
		return await RestaurantDBModel.findById(_id)
	}

	static async update(_id: string, obj: Restaurant) {
		return await RestaurantDBModel.findByIdAndUpdate(_id, obj).then((data) => {
			return data?._id
		})
	}

	static async delete(_id: string) {
		return await RestaurantDBModel.findByIdAndDelete(_id).then((data) => {
			return data?._id
		})
	}
}
