import type {
	City,
	CityFindAllFilters,
	CityPreview,
	CityRepo,
	PayloadCityToggleFavorite,
} from '@/domain/city'

import { SupabaseAdapters } from './supabaseAdapters'
import { supabaseClient } from './supabaseClient'
import { SupabaseHelpers } from './supabaseHelpers'

const FindAllCities = async (
	filters: CityFindAllFilters
): Promise<CityPreview[]> => {
	const fields = 'id,name,country,cover_image'

	if (filters.categoryId) {
		const { data } = await supabaseClient
			.from('cities_with_categories')
			.select(fields)
			.eq('category_id', filters.categoryId)
			.ilike('name', `%${filters.name}%`)

		return data?.map(SupabaseAdapters.ToCityPreview) ?? []
	} else {
		const { data } = await supabaseClient
			.from('cities')
			.select(fields)
			.ilike('name', `%${filters.name}%`)
		return data?.map(SupabaseAdapters.ToCityPreview) ?? []
	}
}

const FindCityById = async (id: string): Promise<City | null> => {
	const { data } = await supabaseClient
		.from('cities_with_full_info')
		.select('*')
		.eq('id', id)
		.single()

	return data ? SupabaseAdapters.ToCity(data) : null
}

const GetRelatedCities = async (cityId: string): Promise<CityPreview[]> => {
	const { data } = await supabaseClient
		.from('related_cities')
		.select('*')
		.eq('source_city_id', cityId)
		.throwOnError()

	return data.map(SupabaseAdapters.ToCityPreview)
}

const ToggleFavorite = async (
	params: PayloadCityToggleFavorite
): Promise<void> => {
	const user = await SupabaseHelpers.GetUserFromSession()

	if (params.isFavorite) {
		await supabaseClient
			.from('favorite_cities')
			.delete()
			.eq('user_id', user.id)
			.eq('city_id', params.cityId)
	} else {
		await supabaseClient
			.from('favorite_cities')
			.insert({ city_id: params.cityId, user_id: user.id })
	}
}

const FindAllFavorites = async (): Promise<CityPreview[]> => {
	const user = await SupabaseHelpers.GetUserFromSession()

	const { data } = await supabaseClient
		.from('favorite_cities')
		.select(
			`
				city_id,
				cities (
						id,
						name,
						country,
						cover_image
						)
				`
		)
		.eq('user_id', user.id)
		.throwOnError()

	return data.map((item) => SupabaseAdapters.ToCityPreview(item.cities))
}

export const supabaseCityRepo: CityRepo = {
	findAll: FindAllCities,
	findById: FindCityById,
	getRelatedCities: GetRelatedCities,
	toggleFavorite: ToggleFavorite,
	findAllFavorites: FindAllFavorites,
}
