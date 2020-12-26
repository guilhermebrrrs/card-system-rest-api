import { Table, TableSchema } from '../models'

export class TableController {
	static async create(obj: Table) {
		return await TableSchema.create(obj)
	}

	static async findAll() {
		return await TableSchema.find()
	}

	static async findById(_id: string) {
		return await TableSchema.findById(_id)
	}

	static async update(_id: string, obj: Table) {
		return await TableSchema.findByIdAndUpdate(_id, obj).then((data) => {
			return data?._id
		})
	}

	static async delete(_id: string) {
		return await TableSchema.findByIdAndDelete(_id).then((data) => {
			return data?._id
		})
	}
}
