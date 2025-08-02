import type { Repositories } from '@/domain/Repositories'

import { MemoryAuthRepo } from '../memory/MemoryAuthRepo'

import { supabaseCategoryRepo } from './SupabaseCategoryRepo'
import { supabaseCityRepo } from './SupabaseCityRepo'

export const SupabaseRepositories: Repositories = {
	auth: new MemoryAuthRepo(),
	category: supabaseCategoryRepo,
	city: supabaseCityRepo,
}
