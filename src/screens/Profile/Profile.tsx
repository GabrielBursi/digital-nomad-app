import React from 'react'
import { Pressable } from 'react-native'

import { Box, Icon, ProfileHeader, Screen, Text } from '@/components'
import { useAuthGetUser, useAuthSignOut } from '@/domain/auth/useCases'

export const ProfileScreen = () => {
	const { signOut } = useAuthSignOut()
	const { authUser } = useAuthGetUser()

	return (
		<Screen>
			{authUser && <ProfileHeader authUser={authUser} />}
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
