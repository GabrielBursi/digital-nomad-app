import { CategoryRepo } from './category'
import { CityRepo } from './city'

export interface Repositories {
	city: CityRepo
	category: CategoryRepo
}
