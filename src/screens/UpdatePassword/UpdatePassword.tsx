import React from 'react'

import { Header, Screen, UpdatePasswordForm } from '@/components'

export const UpdatePasswordScreen = () => {
	const handleUpdatePassword = () => {}

	return (
		<Screen>
			<Header title="Atualizar Senha" />
			<UpdatePasswordForm onSubmit={handleUpdatePassword} />
		</Screen>
	)
}
