import React, { useState } from 'react'
import { Image, StyleSheet } from 'react-native'

import { Button, Screen, Text, TextInput } from '@/components'
import { useAuthSignIn } from '@/domain/auth/useCases'

export const SigninScreen = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const { signIn } = useAuthSignIn()

	const handleSignIn = () => {
		signIn({ email, password })
	}

	return (
		<Screen>
			<Image
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-require-imports
				source={require('../assets/images/logo.png')}
				style={styles.image}
			/>
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
			<Text mb="s16" alignSelf="flex-end" variant="text14" color="primary">
				Esqueceu sua senha
			</Text>
			<Button title="Entrar" onPress={handleSignIn} />
			<Text alignSelf="center" mt="s16" color="gray2">
				Ainda não tem uma conta?{' '}
				<Text variant="title14" color="primary">
					Criar
				</Text>
			</Text>
		</Screen>
	)
}

const styles = StyleSheet.create({
	image: {
		alignSelf: 'center',
		height: 60,
		marginBottom: 60,
		marginTop: 20,
		width: 150,
	},
})
