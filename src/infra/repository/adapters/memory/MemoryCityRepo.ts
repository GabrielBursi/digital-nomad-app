import { cities } from '@/data'
import type {
	City,
	CityFindAllFilters,
	CityPreview,
	CityRepo,
} from '@/domain/city'

export class MemoryCityRepo implements CityRepo {
	async findAll({
		categoryId,
		name,
	}: CityFindAllFilters): Promise<CityPreview[]> {
		await Promise.resolve()
		let filteredCities = cities

		if (categoryId) {
			filteredCities = cities.filter((city) =>
				city.categories.some((category) => category.id === categoryId)
			)
		}

		if (name) {
			const searchTerm = name.toLowerCase()
			filteredCities = filteredCities.filter((city) =>
				city.name.toLowerCase().includes(searchTerm)
			)
		}

		return filteredCities.map((city) => ({
			id: city.id,
			name: city.name,
			country: city.country,
			coverImage: city.coverImage,
		}))
	}

	async findById(id: string): Promise<City | null> {
		await Promise.resolve()
		return cities.find((c) => c.id === id) ?? null
	}

	async getRelatedCities(cityId: string): Promise<CityPreview[]> {
		await Promise.resolve()
		const city = cities.find((c) => c.id === cityId)
		if (!city) return []

		const relatedCitiesIds = city.relatedCitiesIds
		const relatedCities = cities.filter((c) => relatedCitiesIds.includes(c.id))

		return relatedCities.map((city) => ({
			id: city.id,
			name: city.name,
			country: city.country,
			coverImage: city.coverImage,
		}))
	}

	async toggleFavorite(): Promise<void> {
		await Promise.resolve()
	}

	async findAllFavorites(): Promise<CityPreview[]> {
		await Promise.resolve()
		return []
	}
}
