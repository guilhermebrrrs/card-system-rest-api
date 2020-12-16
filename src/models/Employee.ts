import mongoose, { Schema } from 'mongoose'

const employeeSchema = new Schema(
	{
		tid: { type: String, required: true },
		name: { type: String, required: true },
		login: { type: String, required: true },
		password: { type: String, required: true },
	},
	{ collection: 'Employees', timestamps: true }
)

export const EmployeeModel = mongoose.model('Employee', employeeSchema)

export interface IEmployee {
	_id?: string
	tid: string
	name: string
	login: string
	password: string
}
