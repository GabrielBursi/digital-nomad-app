import { cities } from '@/data'

export const useCityDetails = (cityId: string) => {
	const city = cities.find((city) => city.id === cityId)
	return city ?? null
}
