import express, { Request, Response } from 'express'
import { ItemController } from '../controllers'
import { Item } from '../models'

const ItemRouter = express.Router()

ItemRouter.post('/items', async (req: Request, res: Response) => {
	const obj: Item = req.body
	await ItemController.create(obj)
		.then(() => {
			res.status(201).json('Created-OK')
		})
		.catch((err) => {
			console.error(err)
			res.status(200).json('Internal Server Error')
		})
})

ItemRouter.get('/items', async (req: Request, res: Response) => {
	await ItemController.findAll()
		.then((data) => {
			res.status(200).json(data)
		})
		.catch((err) => {
			console.error(err)
			res.status(500).json('Internal Server Error')
		})
})

ItemRouter.get('/items/:_id', async (req: Request, res: Response) => {
	const _id: string = req.params._id
	await ItemController.findById(_id)
		.then((data) => {
			res.status(200).json(data)
		})
		.catch((err) => {
			console.error(err)
			res.status(500).json('Internal Server Error')
		})
})

ItemRouter.put('/items/:_id', async (req: Request, res: Response) => {
	const _id: string = req.params._id
	const obj: Item = req.body
	await ItemController.update(_id, obj)
		.then((data) => {
			res.status(200).json(data)
		})
		.catch((err) => {
			console.error(err)
			res.status(500).json('Internal Server Error')
		})
})

ItemRouter.delete('/items/:_id', async (req: Request, res: Response) => {
	const _id: string = req.params._id
	await ItemController.delete(_id)
		.then((data) => {
			res.status(200).json(data)
		})
		.catch((err) => {
			console.error(err)
			res.status(500).json('Internal Server Error')
		})
})

export { ItemRouter }
