import { Tenant, TenantModel } from '../models'

export class TenantController {
	static async create(name: string) {
		const obj: Tenant = { name: name }
		return await TenantModel.create(obj)
	}

	static async findAll() {
		return await TenantModel.find()
	}

	static async findById(_id: string) {
		return await TenantModel.findById(_id)
	}

	static async update(_id: string, tenant: Tenant) {
		return await TenantModel.findByIdAndUpdate(_id, tenant)
	}

	static async delete(_id: string) {
		return await TenantModel.findByIdAndDelete(_id)
	}
}
