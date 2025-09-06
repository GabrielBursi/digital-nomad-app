import React from 'react'
import { Pressable } from 'react-native'

import {
	Box,
	FavoriteCityCard,
	Icon,
	ProfileHeader,
	Screen,
	Text,
} from '@/components'
import { useAuthGetUser, useAuthSignOut } from '@/domain/auth/useCases'
import { useFindAllFavorites } from '@/domain/city/useCases'

export const ProfileScreen = () => {
	const { signOut } = useAuthSignOut()
	const { authUser } = useAuthGetUser()
	const { favoritesCities } = useFindAllFavorites()

	return (
		<Screen>
			{authUser && <ProfileHeader authUser={authUser} />}
			<Box mt="s16" rowGap="s16">
				{favoritesCities.map((cityPreview) => (
					<FavoriteCityCard key={cityPreview.id} cityPreview={cityPreview} />
				))}
			</Box>
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
