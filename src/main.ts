import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import { RestaurantRouter, TenantRouter } from './routes'

dotenv.config()

const app = express()

const PORT = process.env.PORT
const userName = process.env.MONGODB_USER
const userPassword = process.env.MONGODB_PASSWORD

async function bootstrap() {
	await mongoose
		.connect(
			`mongodb+srv://${userName}:${userPassword}@card-system.lvstm.mongodb.net/card_system?retryWrites=true&w=majority`,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}
		)
		.then((res) => console.log(`Database ${res.connection.host} is running`))
		.catch((err) => console.error(err))

	await app
		.use(express.json())
		.use('/api', [RestaurantRouter, TenantRouter])
		.listen(PORT, () => console.log(`Application is running at PORT ${PORT}`))
}

bootstrap()
