import mongoose, { Schema } from 'mongoose'

const tenantSchema = new Schema(
	{ name: { type: String, required: true } },
	{ collection: 'Tenants', timestamps: true }
)

export const TenantModel = mongoose.model('Tenant', tenantSchema)

export interface ITenant {
	_id?: string
	name?: string
}
