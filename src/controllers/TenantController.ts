import { ITenant, TenantModel } from '../models'

export class TenantController {
	static async create(tenant: ITenant) {
		return await TenantModel.create(tenant)
	}

	static async findAll() {
		return await TenantModel.find()
	}

	static async findById(_id: string) {
		return await TenantModel.findById(_id)
	}

	static async update(_id: string, tenant: ITenant) {
		return await TenantModel.findByIdAndUpdate(_id, tenant).then((data) => {
			return data?._id
		})
	}

	static async delete(_id: string) {
		return await TenantModel.findByIdAndDelete(_id)
	}
}
