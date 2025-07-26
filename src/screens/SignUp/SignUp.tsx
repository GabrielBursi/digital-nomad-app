import React from 'react'

import { Button, Header, Logo, Screen } from '@/components'

export const SignUpScreen = () => {
	const handleSignUp = () => {}

	return (
		<Screen>
			<Header title="Criar conta" />
			<Button title="Criar conta" onPress={handleSignUp} />
			<Logo />
		</Screen>
	)
}
