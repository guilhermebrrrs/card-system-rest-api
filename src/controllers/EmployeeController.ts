import { IEmployee, EmployeeModel } from '../models'

export class EmployeeController {
	static async create(obj: IEmployee) {
		return await EmployeeModel.create(obj)
	}

	static async findAll() {
		return await EmployeeModel.find()
	}

	static async findById(_id: string) {
		return await EmployeeModel.findById(_id)
	}

	static async update(_id: string, obj: IEmployee) {
		return await EmployeeModel.findByIdAndUpdate(_id, obj).then((data) => {
			return data?._id
		})
	}

	static async delete(_id: string) {
		return await EmployeeModel.findByIdAndDelete(_id).then((data) => {
			return data?._id
		})
	}
}
