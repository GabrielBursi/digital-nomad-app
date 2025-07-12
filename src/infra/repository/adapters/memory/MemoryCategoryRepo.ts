import { categories } from '@/data'
import { Category, CategoryRepo } from '@/domain/category'

export class MemoryCategoryRepo implements CategoryRepo {
	async findAll(): Promise<Category[]> {
		await Promise.resolve()
		return categories
	}
}
