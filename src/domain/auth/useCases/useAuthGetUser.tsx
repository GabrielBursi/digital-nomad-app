import { useQuery } from '@tanstack/react-query'

import { useRepository } from '@/infra/repository'

export const useAuthGetUser = () => {
	const { auth } = useRepository()

	const {
		data = null,
		isFetching,
		error,
	} = useQuery({
		queryKey: ['user'],
		queryFn: auth.getUser,
		staleTime: Infinity,
		gcTime: Infinity,
	})

	return {
		user: data,
		error,
		isLoading: isFetching,
	} as const
}
