import mongoose, { Schema } from 'mongoose'

const tenantSchema = new Schema(
	{ name: { type: String, required: true } },
	{ collection: 'Tenants', timestamps: true }
)

export const TenantDBModel = mongoose.model('Tenant', tenantSchema)

export interface Tenant {
	_id?: string
	name?: string
}
