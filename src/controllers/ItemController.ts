import { Item, ItemDBModel } from '../models'

export class ItemController {
	static async create(obj: Item) {
		return await ItemDBModel.create(obj)
	}

	static async findAll() {
		return await ItemDBModel.find()
	}

	static async findById(_id: string) {
		return await ItemDBModel.findById(_id)
	}

	static async update(_id: string, obj: Item) {
		return await ItemDBModel.findByIdAndUpdate(_id, obj).then((data) => {
			return data?._id
		})
	}

	static async delete(_id: string) {
		return await ItemDBModel.findByIdAndDelete(_id).then((data) => {
			return data?._id
		})
	}
}
