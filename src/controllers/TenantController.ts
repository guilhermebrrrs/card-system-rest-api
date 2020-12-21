import { Tenant, TenantDBModel } from '../models'

export class TenantController {
	static async create(obj: Tenant) {
		return await TenantDBModel.create(obj)
	}

	static async findAll() {
		return await TenantDBModel.find()
	}

	static async findById(_id: string) {
		return await TenantDBModel.findById(_id)
	}

	static async update(_id: string, obj: Tenant) {
		return await TenantDBModel.findByIdAndUpdate(_id, obj).then((data) => {
			return data?._id
		})
	}

	static async delete(_id: string) {
		return await TenantDBModel.findByIdAndDelete(_id).then((data) => {
			return data?._id
		})
	}
}
