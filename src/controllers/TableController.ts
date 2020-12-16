import { ITable, TableModel } from '../models'

export class TableController {
	static async create(obj: ITable) {
		return await TableModel.create(obj)
	}

	static async findAll() {
		return await TableModel.find()
	}

	static async findById(_id: string) {
		return await TableModel.findById(_id)
	}

	static async update(_id: string, obj: ITable) {
		return await TableModel.findByIdAndUpdate(_id, obj).then((data) => {
			return data?._id
		})
	}

	static async delete(_id: string) {
		return await TableModel.findByIdAndDelete(_id)
	}
}
