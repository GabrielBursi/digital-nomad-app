import { Repositories } from '@/domain/Repositories'

import { MemoryCategoryRepo } from './MemoryCategoryRepo'
import { MemoryCityRepo } from './MemoryCityRepo'

export const MemoryRepositories: Repositories = {
	city: new MemoryCityRepo(),
	category: new MemoryCategoryRepo(),
}
