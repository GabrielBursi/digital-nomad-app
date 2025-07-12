import { Repositories } from '@/domain/Repositories'
import { MemoryRepositories } from '@/infra/repository'

import { supabaseCategoryRepo } from './category'
import { supabaseCityRepo } from './city'

export * from './category'
export * from './city'

export const SupabaseRepositories: Repositories = {
	city: supabaseCityRepo,
	category: supabaseCategoryRepo,
	auth: MemoryRepositories.auth,
}
