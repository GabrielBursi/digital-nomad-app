import { useQuery } from '@tanstack/react-query'

import { CityFindAllFilters } from '@/domain/city'
import { SupabaseServices } from '@/supabase'

export const useCities = (filters: CityFindAllFilters) => {
	const {
		data = [],
		error,
		isFetching,
	} = useQuery({
		queryKey: ['cities', filters],
		queryFn: () => SupabaseServices.FindAllCities(filters),
		staleTime: Infinity,
		gcTime: Infinity,
	})

	return {
		cities: data,
		error,
		isLoading: isFetching,
	} as const
}
