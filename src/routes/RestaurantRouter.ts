import express, { Request, Response } from 'express'
import { RestaurantController } from '../controllers'
import { Restaurant } from '../models'

const RestaurantRouter = express.Router()

RestaurantRouter.post('/restaurants', async (req: Request, res: Response) => {
	const obj: Restaurant = req.body

	await RestaurantController.create(obj)
		.then(() => {
			res.status(201).json('Created-OK')
		})
		.catch((err) => {
			console.error(err)
			res.status(200).json('Internal Server Error')
		})
})

RestaurantRouter.get('/restaurants', async (req: Request, res: Response) => {
	await RestaurantController.findAll()
		.then((data) => {
			res.status(200).json(data)
		})
		.catch((err) => {
			console.error(err)
			res.status(500).json('Internal Server Error')
		})
})

RestaurantRouter.get(
	'/restaurants/:_id',
	async (req: Request, res: Response) => {
		const _id: string = req.params._id

		await RestaurantController.findById(_id)
			.then((data) => {
				res.status(200).json(data)
			})
			.catch((err) => {
				console.error(err)
				res.status(500).json('Internal Server Error')
			})
	}
)

RestaurantRouter.put(
	'/restaurants/:_id',
	async (req: Request, res: Response) => {
		const _id: string = req.params._id
		const obj: Restaurant = req.body

		await RestaurantController.update(_id, obj)
			.then((data) => {
				res.status(200).json(data)
			})
			.catch((err) => {
				console.error(err)
				res.status(500).json('Internal Server Error')
			})
	}
)

RestaurantRouter.delete(
	'/restaurants/:_id',
	async (req: Request, res: Response) => {
		const _id: string = req.params._id

		await RestaurantController.delete(_id)
			.then((data) => {
				res.status(200).json(data)
			})
			.catch((err) => {
				console.error(err)
				res.status(500).json('Internal Server Error')
			})
	}
)

export { RestaurantRouter }
