import React from 'react'

import { useLocalSearchParams } from 'expo-router'

import { Header, Screen, UpdateProfileForm } from '@/components'
import { AuthUser } from '@/domain/auth'
import { useAuthUpdateProfile } from '@/domain/auth/useCases'

export const UpdateProfileScreen = () => {
	const userData = useLocalSearchParams<Pick<AuthUser, 'fullname' | 'email'>>()

	const { updateProfile } = useAuthUpdateProfile()

	return (
		<Screen>
			<Header title="Atualizar Perfil" />
			<UpdateProfileForm onSubmit={updateProfile} defaultValues={userData} />
		</Screen>
	)
}
