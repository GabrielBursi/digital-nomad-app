import { useCallback } from 'react'

import { useMutation } from '@tanstack/react-query'

import { useFeedbackService } from '@/infra/feedback'
import { useRepository } from '@/infra/repository'

import { useAuthContext } from '../context'

export const useAuthSignOut = () => {
	const { auth } = useRepository()
	const feedbackService = useFeedbackService()
	const { removeAuthUser } = useAuthContext()

	const { error, isPending, isSuccess, mutate } = useMutation({
		mutationKey: ['signOut'],
		mutationFn: auth.signOut,
		gcTime: Infinity,
		onSuccess: async () => {
			await removeAuthUser()
			feedbackService.send({
				type: 'success',
				message: `sign out!`,
			})
		},
		onError: (error) => {
			feedbackService.send({ type: 'error', message: error.message })
		},
	})

	const handleMutate = useCallback(() => mutate(), [mutate])

	return {
		error,
		isLoading: isPending,
		isSuccess,
		signOut: handleMutate,
	} as const
}
