import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import {
	CardRouter,
	CategoryRouter,
	EmployeeRouter,
	ItemRouter,
	ProductRouter,
	RestaurantRouter,
	TableRouter,
	TenantRouter,
} from './routes'
import cors from 'cors'

dotenv.config()

const app = express()

const PORT = process.env.PORT
const database = process.env.MONGODB_DATABASENAME
const userName = process.env.MONGODB_USER
const userPassword = process.env.MONGODB_PASSWORD

const corsConfig = cors({
	origin: '*',
	methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
})

async function bootstrap() {
	await mongoose
		.connect(
			`mongodb+srv://${userName}:${userPassword}@card-system.lvstm.mongodb.net/${database}?retryWrites=true&w=majority`,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}
		)
		.then((res) => console.log(`Database ${res.connection.name} is running`))
		.catch((err) => console.error(err))

	await app
		.use(corsConfig)
		.use(express.json())
		.use('/api', [
			CardRouter,
			CategoryRouter,
			EmployeeRouter,
			ItemRouter,
			ProductRouter,
			RestaurantRouter,
			TableRouter,
			TenantRouter,
		])
		.listen(PORT, () => console.log(`Application is running at PORT ${PORT}`))
}

bootstrap()
