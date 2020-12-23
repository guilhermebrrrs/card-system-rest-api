import express, { Request, Response } from 'express'
import { ProductController } from '../controllers'
import { Product } from '../models'

const ProductRouter = express.Router()

ProductRouter.post('/products', async (req: Request, res: Response) => {
	const obj: Product = req.body
	await ProductController.create(obj)
		.then(() => {
			res.status(201).json('Created-OK')
		})
		.catch((err) => {
			console.error(err)
			res.status(200).json('Internal Server Error')
		})
})

ProductRouter.get('/products', async (req: Request, res: Response) => {
	await ProductController.findAll()
		.then((data) => {
			res.status(200).json(data)
		})
		.catch((err) => {
			console.error(err)
			res.status(500).json('Internal Server Error')
		})
})

ProductRouter.get('/products/:_id', async (req: Request, res: Response) => {
	const _id: string = req.params._id
	await ProductController.findById(_id)
		.then((data) => {
			res.status(200).json(data)
		})
		.catch((err) => {
			console.error(err)
			res.status(500).json('Internal Server Error')
		})
})

ProductRouter.put('/products/:_id', async (req: Request, res: Response) => {
	const _id: string = req.params._id
	const obj: Product = req.body
	await ProductController.update(_id, obj)
		.then((data) => {
			res.status(200).json(data)
		})
		.catch((err) => {
			console.error(err)
			res.status(500).json('Internal Server Error')
		})
})

ProductRouter.delete('/products/:_id', async (req: Request, res: Response) => {
	const _id: string = req.params._id
	await ProductController.delete(_id)
		.then((data) => {
			res.status(200).json(data)
		})
		.catch((err) => {
			console.error(err)
			res.status(500).json('Internal Server Error')
		})
})

export { ProductRouter }
