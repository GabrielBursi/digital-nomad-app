import { useQuery } from '@tanstack/react-query'

import { useRepository } from '@/infra/repository'

export const useRelatedCities = (cityId: string) => {
	const { city } = useRepository()

	const {
		data = [],
		error,
		isFetching,
	} = useQuery({
		queryKey: ['relatedCities', cityId],
		queryFn: () => city.getRelatedCities(cityId),
		staleTime: Infinity,
		gcTime: Infinity,
	})

	return {
		relatedCities: data,
		error,
		isLoading: isFetching,
	} as const
}
