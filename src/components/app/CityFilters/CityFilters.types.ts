import type { Category } from '@/domain/category'

export type CityFiltersProps = {
	categories: Category[]
	cityName: string
	onChangeCityName: (cityName: string) => void
	selectedCategoryId: string | null
	onChangeSelectedCategoryId: (id: string | null) => void
}
