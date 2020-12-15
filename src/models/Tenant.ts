import mongoose, { Schema, Types } from 'mongoose'

const tenantSchema = new Schema(
	{ name: { type: String, required: true } },
	{ collection: 'Tenants', timestamps: true }
)

export const TenantModel = mongoose.model('Tenant', tenantSchema)

export interface Tenant {
	_id?: string
	name?: string
}
