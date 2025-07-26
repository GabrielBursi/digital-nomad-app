import React, { useState } from 'react'

import { Link } from 'expo-router'

import { Button, Logo, Screen, Text, TextInput, TextLink } from '@/components'
import { useAuthSignIn } from '@/domain/auth/useCases'

export const SignInScreen = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const { signIn } = useAuthSignIn()

	const handleSignIn = () => {
		signIn({ email, password })
	}

	return (
		<Screen>
			<Logo />
			<Text variant="title22" alignSelf="center" mb="s16">
				Bem-vindo
			</Text>
			<TextInput
				label="E-mail"
				autoCapitalize="none"
				value={email}
				onChangeText={setEmail}
				placeholder="seu email"
			/>
			<TextInput
				label="Senha"
				autoCapitalize="none"
				secureTextEntry
				value={password}
				onChangeText={setPassword}
				placeholder="digite sua senha"
			/>
			<Link href="/reset-password" asChild>
				<Text mb="s16" alignSelf="flex-end" variant="text14" color="primary">
					Esqueceu sua senha
				</Text>
			</Link>
			<Button title="Entrar" onPress={handleSignIn} />
			<TextLink
				href="/sign-up"
				text="Ainda não tem uma conta?"
				ctaText="Criar"
			/>
		</Screen>
	)
}
