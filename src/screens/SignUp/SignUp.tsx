import React from 'react'

import { Header, Logo, Screen, SignUpForm } from '@/components'

export const SignUpScreen = () => {
	const handleSignUp = console.log

	return (
		<Screen>
			<Header title="Criar conta" />
			<SignUpForm onSubmit={handleSignUp} />
			<Logo />
		</Screen>
	)
}
