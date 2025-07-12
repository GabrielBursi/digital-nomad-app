import { useQuery } from '@tanstack/react-query'

import { supabaseCategoryRepo } from '@/supabase'

export const useCategories = () => {
	const {
		data = [],
		isFetching,
		error,
	} = useQuery({
		queryKey: ['categories'],
		queryFn: () => supabaseCategoryRepo.findAll(),
		staleTime: Infinity,
		gcTime: Infinity,
	})

	return {
		categories: data,
		error,
		isLoading: isFetching,
	} as const
}
