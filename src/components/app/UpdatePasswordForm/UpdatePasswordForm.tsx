import React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'

import { Box, Button, Text, TextInput } from '@/components'

import {
	updatePasswordSchema,
	type UpdatePasswordFormProps,
	type UpdatePasswordSchema,
} from './UpdatePasswordForm.types'

export const UpdatePasswordForm = ({
	onSubmit,
}: Readonly<UpdatePasswordFormProps>) => {
	const { control, handleSubmit } = useForm<UpdatePasswordSchema>({
		resolver: zodResolver(updatePasswordSchema),
	})

	return (
		<Box>
			<Text mb="s16">
				Recomendamos usar uma combinação de letras, números e símbolos para
				maior proteção.
			</Text>

			<Controller
				control={control}
				name="currentPassword"
				render={({ field, fieldState }) => (
					<TextInput
						testID="current-password-input"
						label="Senha Atual"
						secureTextEntry
						value={field.value}
						onChangeText={field.onChange}
						placeholder="Senha atual"
						errorMessage={fieldState.error?.message}
						readOnly
					/>
				)}
			/>
			<Controller
				control={control}
				name="newPassword"
				render={({ field, fieldState }) => (
					<TextInput
						testID="new-password-input"
						label="Nova senha"
						secureTextEntry
						value={field.value}
						onChangeText={field.onChange}
						placeholder="Digite a nova senha"
						errorMessage={fieldState.error?.message}
					/>
				)}
			/>
			<Controller
				control={control}
				name="confirmNewPassword"
				render={({ field, fieldState }) => (
					<TextInput
						testID="confirm-new-password-input"
						label="Confirmar nova senha"
						secureTextEntry
						value={field.value}
						onChangeText={field.onChange}
						placeholder="Digite a nova senha"
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
