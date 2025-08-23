import React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'

import { Box, Button, Text, TextInput } from '@/components'

import {
	updateProfileSchema,
	type UpdateProfileFormProps,
	type UpdateProfileSchema,
} from './UpdateProfileForm.types'

export const UpdateProfileForm = ({
	onSubmit,
	defaultValues = {},
}: Readonly<UpdateProfileFormProps>) => {
	const { control, handleSubmit } = useForm<UpdateProfileSchema>({
		resolver: zodResolver(updateProfileSchema),
		defaultValues,
	})

	return (
		<Box>
			<Text mb="s16">
				Mantenha suas informações atualizadas para uma melhor experiência
			</Text>
			<Controller
				control={control}
				name="fullname"
				render={({ field, fieldState }) => (
					<TextInput
						testID="fullname-input"
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
						testID="email-input"
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

			<Button
				testID="submit-button"
				title="Atualizar"
				// eslint-disable-next-line @typescript-eslint/no-misused-promises
				onPress={handleSubmit(onSubmit)}
			/>
		</Box>
	)
}
