import { useQuery } from '@tanstack/react-query'

import { SupabaseServices } from '@/supabase'
import type { SupabaseCityFilters } from '@/types/supabase'

export const useCities = (filters: SupabaseCityFilters) => {
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
