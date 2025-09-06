import React from 'react'

import { Header, Screen, UpdatePasswordForm } from '@/components'
import { useAuthUpdatePassword } from '@/domain/auth/useCases'

export const UpdatePasswordScreen = () => {
	const { updatePassword } = useAuthUpdatePassword()

	const handleUpdatePassword = updatePassword

	return (
		<Screen>
			<Header title="Atualizar Senha" />
			<UpdatePasswordForm onSubmit={handleUpdatePassword} />
		</Screen>
	)
}
