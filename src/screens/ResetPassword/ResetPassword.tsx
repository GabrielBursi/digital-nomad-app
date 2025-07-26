import React from 'react'

import { Button, Header, Logo, Screen } from '@/components'

export const ResetPasswordScreen = () => {
	const handleResetPassword = () => {}

	return (
		<Screen>
			<Header title="Recuperar Senha" />
			<Button title="Enviar link" onPress={handleResetPassword} />
			<Logo />
		</Screen>
	)
}
