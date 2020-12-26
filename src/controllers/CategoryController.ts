import { Category, CategorySchema } from '../models'

export class CategoryController {
	static async create(obj: Category) {
		return await CategorySchema.create(obj)
	}

	static async findAll() {
		return await CategorySchema.find()
	}

	static async findById(_id: string) {
		return await CategorySchema.findById(_id)
	}

	static async update(_id: string, obj: Category) {
		return await CategorySchema.findByIdAndUpdate(_id, obj).then((data) => {
			return data?._id
		})
	}

	static async delete(_id: string) {
		return await CategorySchema.findByIdAndDelete(_id).then((data) => {
			return data?._id
		})
	}
}
