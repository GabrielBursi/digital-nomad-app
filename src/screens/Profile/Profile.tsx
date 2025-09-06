import React from 'react'
import { Pressable } from 'react-native'

import { Box, CityCard, Icon, ProfileHeader, Screen, Text } from '@/components'
import { useAuthGetUser, useAuthSignOut } from '@/domain/auth/useCases'
import { useFindAllFavorites } from '@/domain/city/useCases'

export const ProfileScreen = () => {
	const { signOut } = useAuthSignOut()
	const { authUser } = useAuthGetUser()
	const { favoritesCities } = useFindAllFavorites()

	return (
		<Screen>
			{authUser && <ProfileHeader authUser={authUser} />}
			{favoritesCities.map((cityPreview) => (
				<CityCard key={cityPreview.id} cityPreview={cityPreview} />
			))}
			<Pressable onPress={signOut}>
				<Box
					mt="s24"
					flexDirection="row"
					alignItems="center"
					alignSelf="center"
				>
					<Icon name="Logout" color="fbErrorSurface" />
					<Text color="fbErrorSurface">Sair</Text>
				</Box>
			</Pressable>
		</Screen>
	)
}
