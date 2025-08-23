import { useMutation, useQueryClient } from '@tanstack/react-query'
import { router } from 'expo-router'

import { useFeedbackService } from '@/infra/feedback'
import { useRepository } from '@/infra/repository'

export const useAuthUpdateProfile = () => {
	const { auth } = useRepository()
	const feedbackService = useFeedbackService()

	const queryClient = useQueryClient()

	const { error, isPending, mutate } = useMutation({
		mutationFn: auth.updateProfile,
		onSuccess: async () => {
			await queryClient.invalidateQueries({ queryKey: ['user'] })
			router.back()
			feedbackService.send({
				type: 'success',
				message: `perfil atualizado com sucesso`,
			})
		},
		onError: () => {
			feedbackService.send({
				type: 'error',
				message: 'erro ao atualizar perfil',
			})
		},
	})

	return {
		updateProfile: mutate,
		error,
		isLoading: isPending,
	} as const
}
