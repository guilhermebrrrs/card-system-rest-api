import express, { Request, Response } from 'express'
import { CategoryController } from '../controllers'
import { Category } from '../models'

const CategoryRouter = express.Router()

CategoryRouter.post('/categories', async (req: Request, res: Response) => {
	const obj: Category = req.body
	await CategoryController.create(obj)
		.then(() => {
			res.status(201).json('Created-OK')
		})
		.catch((err) => {
			console.error(err)
			res.status(500).json('Internal Server Error')
		})
})

CategoryRouter.get('/categories', async (req: Request, res: Response) => {
	await CategoryController.findAll()
		.then((data) => {
			res.status(200).json(data)
		})
		.catch((err) => {
			console.error(err)
			res.status(500).json('Internal Server Error')
		})
})

CategoryRouter.get('/categories/:_id', async (req: Request, res: Response) => {
	const _id: string = req.params._id
	await CategoryController.findById(_id)
		.then((data) => {
			res.status(200).json(data)
		})
		.catch((err) => {
			console.error(err)
			res.status(500).json('Internal Server Error')
		})
})

CategoryRouter.put('/categories/:_id', async (req: Request, res: Response) => {
	const _id: string = req.params._id
	const obj: Category = req.body
	await CategoryController.update(_id, obj)
		.then((data) => {
			res.status(200).json(data)
		})
		.catch((err) => {
			console.error(err)
			res.status(500).json('Internal Server Error')
		})
})

CategoryRouter.delete(
	'/categories/:_id',
	async (req: Request, res: Response) => {
		const _id: string = req.params._id
		await CategoryController.delete(_id)
			.then((data) => {
				res.status(200).json(data)
			})
			.catch((err) => {
				console.error(err)
				res.status(500).json('Internal Server Error')
			})
	}
)

export { CategoryRouter }
