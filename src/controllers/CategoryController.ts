import { Category, CategoryDBModel } from '../models'

export class CategoryController {
	static async create(obj: Category) {
		return await CategoryDBModel.create(obj)
	}

	static async findAll() {
		return await CategoryDBModel.find()
	}

	static async findById(_id: string) {
		return await CategoryDBModel.findById(_id)
	}

	static async update(_id: string, obj: Category) {
		return await CategoryDBModel.findByIdAndUpdate(_id, obj).then((data) => {
			return data?._id
		})
	}

	static async delete(_id: string) {
		return await CategoryDBModel.findByIdAndDelete(_id).then((data) => {
			return data?._id
		})
	}
}
