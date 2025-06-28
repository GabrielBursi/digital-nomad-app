import { Database as SupabaseDatabase } from './supabase'

export type SupabaseTouristAttractionRow =
	SupabaseDatabase['public']['Tables']['tourist_attractions']['Row']
