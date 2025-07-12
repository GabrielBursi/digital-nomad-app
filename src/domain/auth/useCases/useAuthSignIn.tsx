import { useCallback } from 'react'

import { useMutation } from '@tanstack/react-query'

import { useFeedbackService } from '@/infra/feedback'
import { useRepository } from '@/infra/repository'

import type { PayloadAuthSignIn } from '../AuthUserRepository'

export const useAuthSignIn = () => {
	const { auth } = useRepository()
	const feedbackService = useFeedbackService()

	const { data, error, isPending, isSuccess, mutate } = useMutation({
		mutationKey: ['signIn'],
		mutationFn: auth.signIn,
		gcTime: Infinity,
		onSuccess: (authUser) => {
			feedbackService.send({
				type: 'success',
				message: `signed in: ${authUser.email}`,
			})
		},
		onError: (error) => {
			feedbackService.send({ type: 'error', message: error.message })
		},
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
