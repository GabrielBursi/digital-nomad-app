import { AuthRepo } from './auth'
import { CategoryRepo } from './category'
import { CityRepo } from './city'

export interface Repositories {
	auth: AuthRepo
	category: CategoryRepo
	city: CityRepo
}
