import { Redirect, Stack } from 'expo-router'

import { useAuthContext } from '@/domain/auth/context'

import 'react-native-reanimated'

export default function ProtectedLayout() {
	const { authUser, isReady } = useAuthContext()

	if (!isReady) {
		return null
	}

	if (!authUser) {
		return <Redirect href="../sign-in" />
	}
	return (
		<Stack
			screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}
		>
			<Stack.Screen name="(tabs)" />
		</Stack>
	)
}
