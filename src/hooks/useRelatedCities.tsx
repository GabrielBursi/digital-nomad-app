import { useQuery } from '@tanstack/react-query'

import { supabaseCityRepo } from '@/supabase'

export const useRelatedCities = (cityId: string) => {
	const {
		data = [],
		error,
		isFetching,
	} = useQuery({
		queryKey: ['relatedCities', cityId],
		queryFn: () => supabaseCityRepo.getRelatedCities(cityId),
		staleTime: Infinity,
		gcTime: Infinity,
	})

	return {
		relatedCities: data,
		error,
		isLoading: isFetching,
	} as const
}
