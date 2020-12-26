import mongoose, { Schema } from 'mongoose'

export const TenantSchema = mongoose.model(
	'Tenant',
	new Schema(
		{ name: { type: String, required: true } },
		{ collection: 'Tenants', timestamps: true }
	)
)

export interface Tenant {
	_id?: string
	name?: string
}
