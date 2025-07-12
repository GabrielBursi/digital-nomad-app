import { Category } from '@/domain/category'

import { TouristAttraction } from './touristAttraction'

export type City = {
	id: string
	name: string
	country: string
	coverImage: number | string
	description: string
	touristAttractions: TouristAttraction[]
	location: {
		latitude: number
		longitude: number
	}
	categories: Category[]
	relatedCitiesIds: string[]
}

export type CityPreview = Pick<City, 'id' | 'name' | 'country' | 'coverImage'>
