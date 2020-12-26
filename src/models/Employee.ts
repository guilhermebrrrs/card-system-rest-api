import mongoose, { Schema } from 'mongoose'

export const EmployeeSchema = mongoose.model(
	'Employee',
	new Schema(
		{
			tenant_id: { type: String, required: true },
			restaurant_id: { type: String, required: true },
			name: { type: String, required: true },
			login: { type: String, required: true },
			password: { type: String, required: true },
		},
		{ collection: 'Employees', timestamps: true }
	)
)

export interface Employee {
	_id?: string
	tenant_id: string
	restaurant_id: string
	name: string
	login: string
	password: string
}
