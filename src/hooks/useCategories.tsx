import { useQuery } from '@tanstack/react-query'

import { SupabaseServices } from '@/supabase'

export const useCategories = () => {
	const {
		data = [],
		isFetching,
		error,
	} = useQuery({
		queryKey: ['categories'],
		enabled: false,
		queryFn: () => SupabaseServices.ListCategory(),
		staleTime: Infinity,
		gcTime: Infinity,
	})

	return {
		categories: data,
		error,
		isLoading: isFetching,
	} as const
}
