import type { AuthUser as SupaBaseAuthUser } from '@supabase/supabase-js'

import type { AuthUser } from '@/domain/auth'
import { type Category, CategoryCode } from '@/domain/category'
import type { City, CityPreview } from '@/domain/city'
import { ENV_VARIABLES } from '@/env'
import type {
	SupabaseCategoryRow,
	SupabaseCityPreviewRow,
	SupabaseCityWithFullInfo,
	SupabaseTouristAttractionRow,
} from '@/types/supabase'
import type { TouristAttraction } from '@/types/touristAttraction'

const { EXPO_PUBLIC_SUPABASE_URL } = ENV_VARIABLES
const storageURL = EXPO_PUBLIC_SUPABASE_URL

const isSupabaseCategoryRow = (item: unknown): item is SupabaseCategoryRow => {
	return (
		typeof item === 'object' &&
		item !== null &&
		'id' in item &&
		'name' in item &&
		'description' in item &&
		'code' in item &&
		typeof item.id === 'string' &&
		typeof item.name === 'string' &&
		typeof item.description === 'string' &&
		typeof item.code === 'string'
	)
}

const isSupabaseTouristAttractionRow = (
	item: unknown
): item is SupabaseTouristAttractionRow => {
	return (
		typeof item === 'object' &&
		item !== null &&
		'id' in item &&
		'name' in item &&
		'description' in item &&
		'city_id' in item &&
		typeof item.id === 'string' &&
		typeof item.name === 'string' &&
		typeof item.description === 'string' &&
		(typeof item.city_id === 'string' || item.city_id === null)
	)
}

const ToCity = (data: SupabaseCityWithFullInfo): City => {
	const categories = Array.isArray(data.categories)
		? data.categories.filter(isSupabaseCategoryRow)
		: []

	const tourist_attractions = Array.isArray(data.tourist_attractions)
		? data.tourist_attractions.filter(isSupabaseTouristAttractionRow)
		: []

	if (
		data.id === null ||
		data.name === null ||
		data.description === null ||
		data.country === null ||
		data.cover_image === null ||
		data.latitude === null ||
		data.longitude === null
	)
		throw new TypeError('Type not supported', { cause: 'ToCity' })

	return {
		id: data.id,
		name: data.name,
		country: data.country,
		description: data.description,
		coverImage: `${storageURL}/${data.cover_image}`,
		location: {
			latitude: data.latitude,
			longitude: data.longitude,
		},
		categories: categories.map(ToCategory),
		touristAttractions: tourist_attractions.map(ToTouristAttractions),
		relatedCitiesIds: [],
	}
}

const ToCityPreview = (row: SupabaseCityPreviewRow): CityPreview => {
	if (
		row.id === null ||
		row.name === null ||
		row.country === null ||
		row.cover_image === null
	)
		throw new TypeError('Type not supported', { cause: 'ToCityPreview' })

	return {
		id: row.id,
		country: row.country,
		name: row.name,
		coverImage: `${storageURL}/${row.cover_image}`,
	}
}

const ToTouristAttractions = (
	row: SupabaseTouristAttractionRow
): TouristAttraction => {
	if (row.city_id === null)
		throw new TypeError('Type not supported', { cause: 'ToTouristAttractions' })

	return {
		id: row.id,
		description: row.description,
		name: row.name,
		cityId: row.city_id,
	}
}

const isValidCategoryCode = (value: unknown): value is CategoryCode => {
	return (
		typeof value === 'string' &&
		Object.values(CategoryCode).includes(value as CategoryCode)
	)
}

const ToCategoryCode = (value: unknown): CategoryCode => {
	if (!isValidCategoryCode(value)) {
		throw new TypeError('Invalid category code', { cause: value })
	}

	return value
}

const ToCategory = (row: SupabaseCategoryRow): Category => {
	return {
		id: row.id,
		description: row.description,
		name: row.name,
		code: ToCategoryCode(row.code),
	}
}

const ToAuthUser = (supabaseUser: SupaBaseAuthUser): AuthUser => {
	if (!supabaseUser.email) {
		throw new Error('email not found')
	}

	if (
		!supabaseUser.user_metadata['fullname'] ||
		typeof supabaseUser.user_metadata['fullname'] !== 'string'
	)
		throw new TypeError('Invalida fullname', {
			cause: supabaseUser.user_metadata['fullname'],
		})

	return {
		id: supabaseUser.id,
		email: supabaseUser.email,
		fullname: supabaseUser.user_metadata['fullname'],
	}
}

export const SupabaseAdapters = {
	ToCity,
	ToCityPreview,
	ToTouristAttractions,
	ToCategory,
	ToCategoryCode,
	ToAuthUser,
} as const
