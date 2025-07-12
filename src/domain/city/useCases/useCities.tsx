import { useQuery } from '@tanstack/react-query'

import { CityFindAllFilters } from '@/domain/city'
import { useRepository } from '@/infra/repository'

export const useCities = (filters: CityFindAllFilters) => {
	const { city } = useRepository()

	const {
		data = [],
		error,
		isFetching,
	} = useQuery({
		queryKey: ['cities', filters],
		queryFn: () => city.findAll(filters),
		staleTime: Infinity,
		gcTime: Infinity,
	})

	return {
		cities: data,
		error,
		isLoading: isFetching,
	} as const
}
