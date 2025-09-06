import { City, CityPreview } from './City'

export type CityFindAllFilters = {
	name?: string
	categoryId?: string | null
}

export type PayloadCityToggleFavorite = {
	cityId: string
	isFavorite: boolean
}

export interface CityRepo {
	findAll(filters: CityFindAllFilters): Promise<CityPreview[]>
	findById(id: string): Promise<City | null>
	getRelatedCities(cityId: string): Promise<CityPreview[]>
	toggleFavorite(params: PayloadCityToggleFavorite): Promise<void>
}
