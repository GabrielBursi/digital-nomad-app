/* eslint-disable @typescript-eslint/no-require-imports */
import { Stack } from 'expo-router'

import 'react-native-reanimated'

export default function ProtectedLayout() {
	return (
		<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
		</Stack>
	)
}
