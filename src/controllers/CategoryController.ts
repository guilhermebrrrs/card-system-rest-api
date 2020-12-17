import { ICategory, CategoryModel } from '../models'

export class CategoryController {
	static async create(obj: ICategory) {
		return await CategoryModel.create(obj)
	}

	static async findAll() {
		return await CategoryModel.find()
	}

	static async findById(_id: string) {
		return await CategoryModel.findById(_id)
	}

	static async update(_id: string, obj: ICategory) {
		return await CategoryModel.findByIdAndUpdate(_id, obj).then((data) => {
			return data?._id
		})
	}

	static async delete(_id: string) {
		return await CategoryModel.findByIdAndDelete(_id).then((data) => {
			return data?._id
		})
	}
}
