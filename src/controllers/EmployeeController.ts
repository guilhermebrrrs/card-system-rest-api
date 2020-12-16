import { IEmployee, EmployeeModel } from '../models'

export class EmployeeController {
	static async create(employee: IEmployee) {
		return await EmployeeModel.create(employee)
	}

	static async findAll() {
		return await EmployeeModel.find()
	}

	static async findById(_id: string) {
		return await EmployeeModel.findById(_id)
	}

	static async update(_id: string, employee: IEmployee) {
		return await EmployeeModel.findByIdAndUpdate(_id, employee)
	}

	static async delete(_id: string) {
		return await EmployeeModel.findByIdAndDelete(_id)
	}
}
