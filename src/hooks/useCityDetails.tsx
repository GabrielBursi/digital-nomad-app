import { useQuery } from '@tanstack/react-query'

import { SupabaseServices } from '@/supabase'

export const useCityDetails = (cityId: string) => {
	const {
		data = null,
		isFetching,
		error,
	} = useQuery({
		queryKey: ['city', cityId],
		enabled: false,
		queryFn: () => SupabaseServices.FindCityById(cityId),
		staleTime: Infinity,
		gcTime: Infinity,
	})

	return {
		city: data,
		isLoading: isFetching,
		error,
	} as const
}
