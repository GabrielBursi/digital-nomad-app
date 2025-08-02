import { useCallback } from 'react'

import { useMutation } from '@tanstack/react-query'

import { useFeedbackService } from '@/infra/feedback'
import { useRepository } from '@/infra/repository'

import type { PayloadAuthSignUp } from '../AuthUserRepository'

export const useAuthSignUp = () => {
	const { auth } = useRepository()
	const feedbackService = useFeedbackService()

	const { error, isPending, isSuccess, mutate } = useMutation({
		mutationKey: ['signUp'],
		mutationFn: auth.signUp,
		gcTime: Infinity,
		onSuccess: () => {
			feedbackService.send({
				type: 'success',
				message: `conta criada com sucesso`,
			})
		},
		onError: () => {
			feedbackService.send({ type: 'error', message: 'erro ao criar conta' })
		},
	})

	const handleMutate = useCallback(
		(payload: PayloadAuthSignUp) => mutate(payload),
		[mutate]
	)

	return {
		error,
		isLoading: isPending,
		isSuccess,
		signUp: handleMutate,
	} as const
}
