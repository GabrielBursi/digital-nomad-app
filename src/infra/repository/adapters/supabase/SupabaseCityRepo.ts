import type {
	City,
	CityFindAllFilters,
	CityPreview,
	CityRepo,
	PayloadCityToggleFavorite,
} from '@/domain/city'

import { SupabaseAdapters } from './supabaseAdapters'
import { supabaseClient } from './supabaseClient'

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
	const { data, error } = await supabaseClient.auth.getSession()

	if (error || !data.session) {
		throw new Error('invalid session')
	}

	if (params.isFavorite) {
		await supabaseClient
			.from('favorite_cities')
			.delete()
			.eq('user_id', data.session.user.id)
			.eq('city_id', params.cityId)
	} else {
		await supabaseClient
			.from('favorite_cities')
			.insert({ city_id: params.cityId, user_id: data.session.user.id })
	}
}

export const supabaseCityRepo: CityRepo = {
	findAll: FindAllCities,
	findById: FindCityById,
	getRelatedCities: GetRelatedCities,
	toggleFavorite: ToggleFavorite,
}
