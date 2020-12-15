import express from 'express'
import mongoose from 'mongoose'

import { TenantRouter } from './routes'

const app = express()
const PORT = 3333

async function bootstrap() {
	await mongoose
		.connect(
			'mongodb+srv://guilhermebrrrs:9byRzaD0lAZS1P8J@card-system.lvstm.mongodb.net/card_system?retryWrites=true&w=majority',
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}
		)
		.then((res) => console.log(`Database ${res.connection.host} is running`))
		.catch((err) => console.error(err))

	await app
		.use(express.json())
		.use('/api', [TenantRouter])
		.listen(PORT, () => console.log(`Application is running at PORT ${PORT}`))
}

bootstrap()
