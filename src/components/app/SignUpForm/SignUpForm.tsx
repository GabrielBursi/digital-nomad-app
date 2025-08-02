import React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'

import { Box, Button, TextInput } from '@/components/ui'

import {
	signUpSchema,
	type SignUpFormProps,
	type SignUpSchema,
} from './SignUpForm.types'

export const SignUpForm = ({ onSubmit }: Readonly<SignUpFormProps>) => {
	const { control, handleSubmit } = useForm<SignUpSchema>({
		resolver: zodResolver(signUpSchema),
		defaultValues: {
			confirmPassword: '',
			email: '',
			fullname: '',
			password: '',
		},
		mode: 'onSubmit',
	})

	return (
		<Box>
			<Controller
				control={control}
				name="fullname"
				render={({ field, fieldState }) => (
					<TextInput
						label="Nome completo"
						value={field.value}
						onChangeText={field.onChange}
						placeholder="seu nome completo"
						errorMessage={fieldState.error?.message}
					/>
				)}
			/>

			<Controller
				control={control}
				name="email"
				render={({ field, fieldState }) => (
					<TextInput
						label="E-mail"
						autoCapitalize="none"
						keyboardType="email-address"
						value={field.value}
						onChangeText={field.onChange}
						placeholder="seu email"
						errorMessage={fieldState.error?.message}
					/>
				)}
			/>

			<Controller
				control={control}
				name="password"
				render={({ field, fieldState }) => (
					<TextInput
						label="Senha"
						secureTextEntry
						value={field.value}
						onChangeText={field.onChange}
						placeholder="sua senha"
						errorMessage={fieldState.error?.message}
					/>
				)}
			/>

			<Controller
				control={control}
				name="confirmPassword"
				render={({ field, fieldState }) => (
					<TextInput
						label="Confirmar senha"
						secureTextEntry
						value={field.value}
						onChangeText={field.onChange}
						placeholder="confirme sua senha"
						errorMessage={fieldState.error?.message}
					/>
				)}
			/>

			<Button
				title="Criar conta"
				// eslint-disable-next-line @typescript-eslint/no-misused-promises
				onPress={handleSubmit(onSubmit)}
				mb="s20"
			/>
		</Box>
	)
}
