import React from 'react'

import { useLocalSearchParams } from 'expo-router'

import { Header, Screen, UpdateProfileForm } from '@/components'
import { AuthUser } from '@/domain/auth'

export const UpdateProfileScreen = () => {
	const userData = useLocalSearchParams<Pick<AuthUser, 'fullname' | 'email'>>()

	const handleUpdateProfile = () => {}

	return (
		<Screen>
			<Header title="Atualizar Perfil" />
			<UpdateProfileForm
				onSubmit={handleUpdateProfile}
				defaultValues={userData}
			/>
		</Screen>
	)
}
