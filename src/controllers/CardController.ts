import { Card, CardDBModel } from '../models'

export class CardController {
	static async create(obj: Card) {
		return await CardDBModel.create(obj)
	}

	static async findAll() {
		return await CardDBModel.find()
	}

	static async findById(_id: string) {
		return await CardDBModel.findById(_id)
	}

	static async update(_id: string, obj: Card) {
		let totalValueOfCardItems: number = 0
		obj.items.map((objItem) => {
			totalValueOfCardItems += objItem.item.price * objItem.item_amount
		})
		obj.total = totalValueOfCardItems
		return await CardDBModel.findByIdAndUpdate(_id, obj).then((data) => {
			return data?._id
		})
	}

	static async delete(_id: string) {
		return await CardDBModel.findByIdAndDelete(_id).then((data) => {
			return data?._id
		})
	}
}
