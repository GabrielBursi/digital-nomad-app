import { useCallback } from 'react'

import { useMutation } from '@tanstack/react-query'

import { useFeedbackService } from '@/infra/feedback'
import { useRepository } from '@/infra/repository'

export const useAuthSendResetPasswordEmail = () => {
	const { auth } = useRepository()
	const feedbackService = useFeedbackService()

	const { error, isPending, isSuccess, mutate } = useMutation({
		mutationKey: ['SendResetPasswordEmail'],
		mutationFn: auth.sendResetPasswordEmail,
		gcTime: Infinity,
		onSuccess: () => {
			feedbackService.send({
				type: 'success',
				message: `verifique sua caixa de e-mail`,
			})
		},
		onError: () => {
			feedbackService.send({ type: 'error', message: 'error on sign' })
		},
	})

	const handleMutate = useCallback((email: string) => mutate(email), [mutate])

	return {
		error,
		isLoading: isPending,
		isSuccess,
		sendResetPasswordEmail: handleMutate,
	} as const
}
