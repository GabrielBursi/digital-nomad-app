import { useMutation } from '@tanstack/react-query'
import { router } from 'expo-router'

import { useFeedbackService } from '@/infra/feedback'
import { useRepository } from '@/infra/repository'

import { PayloadAuthUpdatePassword } from '../AuthUserRepository'

export const useAuthUpdatePassword = () => {
	const { auth } = useRepository()
	const feedbackService = useFeedbackService()

	const { error, isPending, mutate } = useMutation({
		mutationFn: auth.updatePassword,
		onSuccess: () => {
			router.back()
			feedbackService.send({
				type: 'success',
				message: `senha atualizada com sucesso`,
			})
		},
		onError: () => {
			feedbackService.send({
				type: 'error',
				message: 'erro ao atualizar senha',
			})
		},
	})

	const handleMutate = (payload: PayloadAuthUpdatePassword) => mutate(payload)

	return {
		updatePassword: handleMutate,
		error,
		isLoading: isPending,
	} as const
}
