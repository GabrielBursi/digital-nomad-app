import { useQuery } from '@tanstack/react-query'

import { useRepository } from '@/infra/repository'

export const useCategories = () => {
	const { category } = useRepository()

	const {
		data = [],
		isFetching,
		error,
	} = useQuery({
		queryKey: ['categories'],
		queryFn: () => category.findAll(),
		staleTime: Infinity,
		gcTime: Infinity,
	})

	return {
		categories: data,
		error,
		isLoading: isFetching,
	} as const
}
