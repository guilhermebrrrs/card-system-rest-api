import express, { Request, Response } from 'express'
import { TableController } from '../controllers'
import { Table } from '../models'

const TableRouter = express.Router()

TableRouter.post('/tables', async (req: Request, res: Response) => {
	const obj: Table = req.body
	await TableController.create(obj)
		.then((data) => {
			res.status(201).json('Created-OK')
		})
		.catch((err) => {
			console.error(err)
			res.status(500).json('Internal Server Error')
		})
})

TableRouter.get('/tables', async (req: Request, res: Response) => {
	await TableController.findAll()
		.then((data) => {
			res.status(200).json(data)
		})
		.catch((err) => {
			console.error(err)
			res.status(500).json('Internal Server Error')
		})
})

TableRouter.get('/tables/:_id', async (req: Request, res: Response) => {
	const _id: string = req.params._id
	await TableController.findById(_id)
		.then((data) => {
			res.status(200).json(data)
		})
		.catch((err) => {
			console.error(err)
			res.status(500).json('Internal Server Error')
		})
})

TableRouter.put('/tables/:_id', async (req: Request, res: Response) => {
	const _id: string = req.params._id
	const obj: Table = req.body
	await TableController.update(_id, obj)
		.then((data) => {
			res.status(200).json(data)
		})
		.catch((err) => {
			console.error(err)
			res.status(500).json('Internal Server Error')
		})
})

TableRouter.delete('/tables/:_id', async (req: Request, res: Response) => {
	const _id: string = req.params._id
	await TableController.delete(_id)
		.then((data) => {
			res.status(200).json(data)
		})
		.catch((err) => {
			console.error(err)
			res.status(500).json('Internal Server Error')
		})
})

export { TableRouter }
