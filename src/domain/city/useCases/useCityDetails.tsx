import { useQuery } from '@tanstack/react-query'

import { useRepository } from '@/infra/repository'

export const useCityDetails = (cityId: string) => {
	const { city } = useRepository()

	const {
		data = null,
		isFetching,
		error,
	} = useQuery({
		queryKey: ['city', cityId],
		queryFn: () => city.findById(cityId),
		staleTime: Infinity,
		gcTime: Infinity,
	})

	return {
		city: data,
		isLoading: isFetching,
		error,
	} as const
}
