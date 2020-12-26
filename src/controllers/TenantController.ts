import { Tenant, TenantSchema } from '../models'

export class TenantController {
	static async create(obj: Tenant) {
		return await TenantSchema.create(obj)
	}

	static async findAll() {
		return await TenantSchema.find()
	}

	static async findById(_id: string) {
		return await TenantSchema.findById(_id)
	}

	static async update(_id: string, obj: Tenant) {
		return await TenantSchema.findByIdAndUpdate(_id, obj).then((data) => {
			return data?._id
		})
	}

	static async delete(_id: string) {
		return await TenantSchema.findByIdAndDelete(_id).then((data) => {
			return data?._id
		})
	}
}
