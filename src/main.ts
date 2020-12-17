import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import {
	CategoryRouter,
	EmployeeRouter,
	RestaurantRouter,
	TableRouter,
	TenantRouter,
} from './routes'

dotenv.config()

const app = express()

const PORT = process.env.PORT
const database = process.env.MONGODB_DATABASENAME
const userName = process.env.MONGODB_USER
const userPassword = process.env.MONGODB_PASSWORD

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
		.use(express.json())
		.use('/api', [
			CategoryRouter,
			EmployeeRouter,
			RestaurantRouter,
			TableRouter,
			TenantRouter,
		])
		.listen(PORT, () => console.log(`Application is running at PORT ${PORT}`))
}

bootstrap()
