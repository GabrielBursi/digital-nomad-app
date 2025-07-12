import { categories } from '@/data'
import type { Category, CategoryRepo } from '@/domain/category'

export class MemoryCategoryRepo implements CategoryRepo {
	async findAll(): Promise<Category[]> {
		await Promise.resolve()
		return categories
	}
}
