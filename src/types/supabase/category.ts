import { Database as SupabaseDatabase } from './supabase'

export type SupabaseCategoryRow =
	SupabaseDatabase['public']['Tables']['categories']['Row']
