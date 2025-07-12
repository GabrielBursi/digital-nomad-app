import { Category } from './Category'

export interface CategoryRepo {
	findAll(): Promise<Category[]>
}
