import React from 'react'
import { Pressable } from 'react-native'

import { Box, Icon, Screen, Text } from '@/components'
import { useAuthSignOut } from '@/domain/auth/useCases'

export const ProfileScreen = () => {
	const { signOut } = useAuthSignOut()

	return (
		<Screen>
			<Text>Profile Screen</Text>
			<Pressable onPress={signOut}>
				<Box flexDirection="row" alignItems="center">
					<Text>Sair</Text>
					<Icon name="Logout" color="primary" />
				</Box>
			</Pressable>
		</Screen>
	)
}
