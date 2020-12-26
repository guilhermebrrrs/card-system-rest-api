import express, { Request, Response } from 'express'
import { TenantController } from '../controllers'
import { Tenant } from '../models'

const TenantRouter = express.Router()

TenantRouter.post('/tenants', async (req: Request, res: Response) => {
	const obj: Tenant = req.body

	await TenantController.create(obj)
		.then(() => {
			res.status(201).json('Created-OK')
		})
		.catch((err) => {
			console.error(err)
			res.status(500).json('Internal Server Error')
		})
})

TenantRouter.get('/tenants', async (req: Request, res: Response) => {
	await TenantController.findAll()
		.then((data) => {
			res.status(200).json(data)
		})
		.catch((err) => {
			console.error(err)
			res.status(500).json('Internal Server Error')
		})
})

TenantRouter.get('/tenants/:_id', async (req: Request, res: Response) => {
	const _id: string = req.params._id

	await TenantController.findById(_id)
		.then((data) => {
			res.status(200).json(data)
		})
		.catch((err) => {
			console.error(err)
			res.status(500).json('Internal Server Error')
		})
})

TenantRouter.put('/tenants/:_id', async (req: Request, res: Response) => {
	const _id: string = req.params._id
	const obj: Tenant = req.body

	await TenantController.update(_id, obj)
		.then((data) => {
			res.status(200).json(data)
		})
		.catch((err) => {
			console.error(err)
			res.status(500).json('Internal Server Error')
		})
})

TenantRouter.delete('/tenants/:_id', async (req: Request, res: Response) => {
	const _id: string = req.params._id

	await TenantController.delete(_id)
		.then((data) => {
			res.status(200).json(data)
		})
		.catch((err) => {
			console.error(err)
			res.status(500).json('Internal Server Error')
		})
})

export { TenantRouter }
