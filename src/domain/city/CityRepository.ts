import { City, CityPreview } from './City'

export type CityFindAllFilters = {
	name?: string
	categoryId?: string | null
}

export interface CityRepo {
	findAll(filters: CityFindAllFilters): Promise<CityPreview[]>
	findById(id: string): Promise<City | null>
	getRelatedCities(cityId: string): Promise<CityPreview[]>
}
