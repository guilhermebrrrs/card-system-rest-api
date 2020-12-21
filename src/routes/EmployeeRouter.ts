import express, { Request, Response } from 'express'
import { EmployeeController } from '../controllers'
import { Employee } from '../models'

const routes = express.Router()

routes.post('/employees', async (req: Request, res: Response) => {
	const obj: Employee = req.body
	await EmployeeController.create(obj)
		.then(() => {
			res.status(201).json('Created-OK')
		})
		.catch((err) => {
			console.error(err)
			res.status(500).json('Internal Server Error')
		})
})

routes.get('/employees', async (req: Request, res: Response) => {
	await EmployeeController.findAll()
		.then((data) => {
			res.status(200).json(data)
		})
		.catch((err) => {
			console.error(err)
			res.status(500).json('Internal Server Error')
		})
})

routes.get('/employees/:_id', async (req: Request, res: Response) => {
	const _id: string = req.params._id
	await EmployeeController.findById(_id)
		.then((data) => {
			res.status(200).json(data)
		})
		.catch((err) => {
			console.error(err)
			res.status(500).json('Internal Server Error')
		})
})

routes.put('/employees/:_id', async (req: Request, res: Response) => {
	const _id: string = req.params._id
	const obj: Employee = req.body
	await EmployeeController.update(_id, obj)
		.then((data) => {
			res.status(200).json(data)
		})
		.catch((err) => {
			console.error(err)
			res.status(500).json('Internal Server Error')
		})
})

routes.delete('/employees/:_id', async (req: Request, res: Response) => {
	const _id: string = req.params._id
	await EmployeeController.delete(_id)
		.then((data) => {
			res.status(200).json(data)
		})
		.catch((err) => {
			console.error(err)
			res.status(500).json('Internal Server Error')
		})
})

export default routes
