import { useQuery } from '@tanstack/react-query'

import { supabaseCityRepo } from '@/supabase'

export const useCityDetails = (cityId: string) => {
	const {
		data = null,
		isFetching,
		error,
	} = useQuery({
		queryKey: ['city', cityId],
		queryFn: () => supabaseCityRepo.findById(cityId),
		staleTime: Infinity,
		gcTime: Infinity,
	})

	return {
		city: data,
		isLoading: isFetching,
		error,
	} as const
}
