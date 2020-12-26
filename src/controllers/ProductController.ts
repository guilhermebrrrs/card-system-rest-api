import { Product, ProductSchema } from '../models'

export class ProductController {
	static async create(obj: Product) {
		return await ProductSchema.create(obj)
	}

	static async findAll() {
		return await ProductSchema.find()
	}

	static async findById(_id: string) {
		return await ProductSchema.findById(_id)
	}

	static async update(_id: string, obj: Product) {
		return await ProductSchema.findByIdAndUpdate(_id, obj).then((data) => {
			return data?._id
		})
	}

	static async delete(_id: string) {
		return await ProductSchema.findByIdAndDelete(_id).then((data) => {
			return data?._id
		})
	}
}
