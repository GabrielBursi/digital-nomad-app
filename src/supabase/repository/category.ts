import type { Category, CategoryRepo } from '@/domain/category'

import { SupabaseAdapters } from '../supabaseAdapters'
import { supabaseClient } from '../supabaseClient'

const ListCategory = async (): Promise<Category[]> => {
	const { data } = await supabaseClient.from('categories').select('*')

	return (
		data?.map((row) => ({
			id: row.id,
			description: row.description,
			name: row.name,
			code: SupabaseAdapters.ToCategoryCode(row.code),
		})) ?? []
	)
}

export const supabaseCategoryRepo: CategoryRepo = {
	findAll: ListCategory,
}
