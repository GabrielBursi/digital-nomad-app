import { cities } from '@/data'
import type { CityPreview } from '@/domain/city'

type CityFilter = {
	name?: string
	categoryId?: string | null
}

export const useCitiesFilter = ({
	name,
	categoryId,
}: CityFilter): {
	cityPreviewList: CityPreview[]
} => {
	let cityPreviewList = [...cities]

	if (name) {
		cityPreviewList = cityPreviewList.filter((city) => {
			return city.name.toLowerCase().includes(name.toLowerCase())
		})
	}

	if (categoryId) {
		cityPreviewList = cityPreviewList.filter((city) => {
			return city.categories.some((category) => category.id === categoryId)
		})
	}

	return { cityPreviewList } as const
}
