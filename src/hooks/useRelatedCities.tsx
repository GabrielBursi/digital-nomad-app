import { useQuery } from '@tanstack/react-query'

import { SupabaseServices } from '@/supabase'

export const useRelatedCities = (cityId: string) => {
	const {
		data = [],
		error,
		isFetching,
	} = useQuery({
		queryKey: ['relatedCities', cityId],
		queryFn: () => SupabaseServices.GetRelatedCities(cityId),
		staleTime: Infinity,
		gcTime: Infinity,
	})

	return {
		relatedCities: data,
		error,
		isLoading: isFetching,
	} as const
}
