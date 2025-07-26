import React, { useState } from 'react'

import {
	Button,
	Header,
	Logo,
	Screen,
	Text,
	TextInput,
	TextLink,
} from '@/components'

export const ResetPasswordScreen = () => {
	const [email, setEmail] = useState('')

	const handleResetPassword = () => {}

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
