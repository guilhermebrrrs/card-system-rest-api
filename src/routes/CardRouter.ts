import express, { Request, Response } from 'express'
import { CardController } from '../controllers'
import { Card } from '../models'

const CardRouter = express.Router()

CardRouter.post('/cards', async (req: Request, res: Response) => {
	const obj: Card = req.body
	await CardController.create(obj)
		.then(() => {
			res.status(201).json('Created-OK')
		})
		.catch((err) => {
			console.error(err)
			res.status(500).json('Internal Server Error')
		})
})

CardRouter.get('/cards', async (req: Request, res: Response) => {
	await CardController.findAll()
		.then((data) => {
			res.status(200).json(data)
		})
		.catch((err) => {
			console.error(err)
			res.status(500).json('Internal Server Error')
		})
})

CardRouter.get('/cards/:_id', async (req: Request, res: Response) => {
	const _id: string = req.params._id
	await CardController.findById(_id)
		.then((data) => {
			res.status(200).json(data)
		})
		.catch((err) => {
			console.error(err)
			res.status(500).json('Internal Server Error')
		})
})

CardRouter.put('/card/:_id', async (req: Request, res: Response) => {
	const _id: string = req.params._id
	const obj: Card = req.body
	await CardController.update(_id, obj)
		.then((data) => {
			res.status(200).json(data)
		})
		.catch((err) => {
			console.error(err)
			res.status(500).json('Internal Server Error')
		})
})

CardRouter.delete('/cards/:_id', async (req: Request, res: Response) => {
	const _id: string = req.params._id
	await CardController.delete(_id)
		.then((data) => {
			res.status(200).json(data)
		})
		.catch((err) => {
			console.error(err)
			res.status(500).json('Internal Server Error')
		})
})

export { CardRouter }
