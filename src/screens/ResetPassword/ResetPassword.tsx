import React, { useEffect, useState } from 'react'

import { router } from 'expo-router'

import {
	Button,
	Header,
	Logo,
	Screen,
	Text,
	TextInput,
	TextLink,
} from '@/components'
import { useAuthSendResetPasswordEmail } from '@/domain/auth/useCases'

export const ResetPasswordScreen = () => {
	const [email, setEmail] = useState('')

	const { sendResetPasswordEmail, isSuccess, isLoading } =
		useAuthSendResetPasswordEmail()

	const handleResetPassword = () => sendResetPasswordEmail(email)

	useEffect(() => {
		if (!isLoading && isSuccess) router.back()
	}, [isLoading, isSuccess])

	return (
		<Screen>
			<Header title="Recuperar Senha" />
			<Text mb="s16">
				Digite o endereço de e-mail associado à sua conta e enviaremos
				instruções para redefinir sua senha
			</Text>
			<TextInput
				label="E-mail"
				autoCapitalize="none"
				value={email}
				onChangeText={setEmail}
				placeholder="seu email"
			/>
			<Button title="Enviar link" onPress={handleResetPassword} />

			<TextLink
				goBackOnPress
				text="Lembrou sua senha?"
				ctaText="Voltar para o login"
			/>
			<Logo />
		</Screen>
	)
}
