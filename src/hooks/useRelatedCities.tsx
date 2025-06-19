import { cities } from '@/data'
import type { CityPreview } from '@/types/city'

export const useRelatedCities = (relatedCitiesIds: string[]): CityPreview[] => {
	return cities.filter((city) => relatedCitiesIds.includes(city.id))
}
