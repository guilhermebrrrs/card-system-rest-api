import { Employee, EmployeeSchema } from '../models'

export class EmployeeController {
	static async create(obj: Employee) {
		return await EmployeeSchema.create(obj)
	}

	static async findAll() {
		return await EmployeeSchema.find()
	}

	static async findById(_id: string) {
		return await EmployeeSchema.findById(_id)
	}

	static async update(_id: string, obj: Employee) {
		return await EmployeeSchema.findByIdAndUpdate(_id, obj).then((data) => {
			return data?._id
		})
	}

	static async delete(_id: string) {
		return await EmployeeSchema.findByIdAndDelete(_id).then((data) => {
			return data?._id
		})
	}
}
