import { Database as SupabaseDatabase } from './supabase'

export type SupabaseCityWithFullInfo =
	SupabaseDatabase['public']['Views']['cities_with_full_info']['Row']

export type SupabaseCityPreviewRow = {
	id: string | null
	name: string | null
	country: string | null
	cover_image: string | null
}
