import { Product, ProductDBModel } from '../models'

export class ProductController {
	static async create(obj: Product) {
		return await ProductDBModel.create(obj)
	}

	static async findAll() {
		return await ProductDBModel.find()
	}

	static async findById(_id: string) {
		return await ProductDBModel.findById(_id)
	}

	static async update(_id: string, obj: Product) {
		return await ProductDBModel.findByIdAndUpdate(_id, obj).then((data) => {
			return data?._id
		})
	}

	static async delete(_id: string) {
		return await ProductDBModel.findByIdAndDelete(_id).then((data) => {
			return data?._id
		})
	}
}
