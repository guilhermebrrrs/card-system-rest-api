import { Item, ItemSchema } from '../models'

export class ItemController {
	static async create(obj: Item) {
		return await ItemSchema.create(obj)
	}

	static async findAll() {
		return await ItemSchema.find()
	}

	static async findById(_id: string) {
		return await ItemSchema.findById(_id)
	}

	static async update(_id: string, obj: Item) {
		return await ItemSchema.findByIdAndUpdate(_id, obj).then((data) => {
			return data?._id
		})
	}

	static async delete(_id: string) {
		return await ItemSchema.findByIdAndDelete(_id).then((data) => {
			return data?._id
		})
	}
}
