import { useCallback } from 'react'

import { useMutation } from '@tanstack/react-query'

import { useRepository } from '@/infra/repository'

import type { PayloadAuthSignIn } from '../AuthUserRepository'

export const useAuthSignIn = () => {
	const { auth } = useRepository()

	const { data, error, isPending, isSuccess, mutate } = useMutation({
		mutationKey: ['signIn'],
		mutationFn: auth.signIn,
		gcTime: Infinity,
	})

	const handleMutate = useCallback(
		(payload: PayloadAuthSignIn) => mutate(payload),
		[mutate]
	)

	return {
		user: data ?? null,
		error,
		isLoading: isPending,
		isSuccess,
		signIn: handleMutate,
	} as const
}
