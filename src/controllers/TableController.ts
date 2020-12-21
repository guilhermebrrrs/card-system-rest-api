import { Table, TableDBModel } from '../models'

export class TableController {
	static async create(obj: Table) {
		return await TableDBModel.create(obj)
	}

	static async findAll() {
		return await TableDBModel.find()
	}

	static async findById(_id: string) {
		return await TableDBModel.findById(_id)
	}

	static async update(_id: string, obj: Table) {
		return await TableDBModel.findByIdAndUpdate(_id, obj).then((data) => {
			return data?._id
		})
	}

	static async delete(_id: string) {
		return await TableDBModel.findByIdAndDelete(_id).then((data) => {
			return data?._id
		})
	}
}
