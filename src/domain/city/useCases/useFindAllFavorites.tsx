import { useQuery } from '@tanstack/react-query'

import { useRepository } from '@/infra/repository'

export const useFindAllFavorites = () => {
	const { city } = useRepository()

	const {
		data = [],
		error,
		isFetching,
	} = useQuery({
		queryKey: ['cities-favorites'],
		queryFn: () => city.findAllFavorites(),
		staleTime: Infinity,
		gcTime: Infinity,
	})

	return {
		favoritesCities: data,
		error,
		isLoading: isFetching,
	} as const
}
