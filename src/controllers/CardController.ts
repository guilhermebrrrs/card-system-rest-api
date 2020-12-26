import { Card, CardSchema } from '../models'

export class CardController {
	static async create(obj: Card) {
		return await CardSchema.create(obj)
	}

	static async findAll() {
		return await CardSchema.find()
	}

	static async findById(_id: string) {
		return await CardSchema.findById(_id)
	}

	static async update(_id: string, obj: Card) {
		let totalValueOfCardItems: number = 0

		obj.items.map((objItem) => {
			totalValueOfCardItems += objItem.item.price * objItem.item_amount
		})
		obj.total = totalValueOfCardItems

		return await CardSchema.findByIdAndUpdate(_id, obj).then((data) => {
			return data?._id
		})
	}

	static async delete(_id: string) {
		return await CardSchema.findByIdAndDelete(_id).then((data) => {
			return data?._id
		})
	}
}
