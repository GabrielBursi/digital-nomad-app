import { useMutation, useQueryClient } from '@tanstack/react-query'

import { useRepository } from '@/infra/repository'

import { PayloadCityToggleFavorite } from '../CityRepository'

export const useCityToggleFavorite = () => {
	const { city } = useRepository()

	const queryCliente = useQueryClient()

	const { error, isPending, mutate } = useMutation({
		mutationFn: (payload: PayloadCityToggleFavorite) =>
			city.toggleFavorite(payload),
		onSuccess: () =>
			queryCliente.invalidateQueries({ queryKey: ['cities-favorites'] }),
	})

	const handleMutate = (payload: PayloadCityToggleFavorite) => mutate(payload)

	return {
		toggleFavorite: handleMutate,
		error,
		isLoading: isPending,
	} as const
}
