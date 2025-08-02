import React from 'react'

import { Header, Logo, Screen, SignUpForm } from '@/components'
import { SignUpSchema } from '@/components/app/SignUpForm/SignUpForm.types'
import { useAuthSignUp } from '@/domain/auth/useCases'

export const SignUpScreen = () => {
	const { signUp } = useAuthSignUp()

	const handleSignUp = (formValues: SignUpSchema) => {
		signUp({
			email: formValues.email,
			fullname: formValues.fullname,
			password: formValues.password,
		})
	}

	return (
		<Screen>
			<Header title="Criar conta" />
			<SignUpForm onSubmit={handleSignUp} />
			<Logo />
		</Screen>
	)
}
