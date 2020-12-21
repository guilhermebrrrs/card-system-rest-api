import { Employee, EmployeeDBModel } from '../models'

export class EmployeeController {
	static async create(obj: Employee) {
		return await EmployeeDBModel.create(obj)
	}

	static async findAll() {
		return await EmployeeDBModel.find()
	}

	static async findById(_id: string) {
		return await EmployeeDBModel.findById(_id)
	}

	static async update(_id: string, obj: Employee) {
		return await EmployeeDBModel.findByIdAndUpdate(_id, obj).then((data) => {
			return data?._id
		})
	}

	static async delete(_id: string) {
		return await EmployeeDBModel.findByIdAndDelete(_id).then((data) => {
			return data?._id
		})
	}
}
