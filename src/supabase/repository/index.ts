import { Repositories } from '@/domain/Repositories'

import { supabaseCategoryRepo } from './category'
import { supabaseCityRepo } from './city'

export * from './category'
export * from './city'

export const SupabaseRepositories: Repositories = {
	city: supabaseCityRepo,
	category: supabaseCategoryRepo,
}
