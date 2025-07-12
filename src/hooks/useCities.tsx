import { useQuery } from '@tanstack/react-query'

import { CityFindAllFilters } from '@/domain/city'
import { supabaseCityRepo } from '@/supabase'

export const useCities = (filters: CityFindAllFilters) => {
	const {
		data = [],
		error,
		isFetching,
	} = useQuery({
		queryKey: ['cities', filters],
		queryFn: () => supabaseCityRepo.findAll(filters),
		staleTime: Infinity,
		gcTime: Infinity,
	})

	return {
		cities: data,
		error,
		isLoading: isFetching,
	} as const
}
