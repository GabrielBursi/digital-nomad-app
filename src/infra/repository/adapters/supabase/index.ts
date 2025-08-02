import type { Repositories } from '@/domain/Repositories'

import { SupabaseAuthRepo } from './SupabaseAuthRepo'
import { supabaseCategoryRepo } from './SupabaseCategoryRepo'
import { supabaseCityRepo } from './SupabaseCityRepo'

export const SupabaseRepositories: Repositories = {
	auth: new SupabaseAuthRepo(),
	category: supabaseCategoryRepo,
	city: supabaseCityRepo,
}
