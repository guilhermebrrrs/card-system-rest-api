import { IRestaurant, RestaurantModel } from '../models'

export class RestaurantController {
	static async create(restaurant: IRestaurant) {
		return await RestaurantModel.create(restaurant)
	}

	static async findAll() {
		return await RestaurantModel.find()
	}

	static async findById(_id: string) {
		return await RestaurantModel.findById(_id)
	}

	static async update(_id: string, restaurant: IRestaurant) {
		return await RestaurantModel.findByIdAndUpdate(_id, restaurant).then(
			(data) => {
				return data?._id
			}
		)
	}

	static async delete(_id: string) {
		return await RestaurantModel.findByIdAndDelete(_id)
	}
}