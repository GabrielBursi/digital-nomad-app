import { ThemeProvider } from '@shopify/restyle'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import { theme } from '@/theme'
import 'react-native-reanimated'

export default function RootLayout() {
	return (
		<ThemeProvider theme={theme}>
			<Stack>
				<Stack.Screen name="(protected)" options={{ headerShown: false }} />
				<Stack.Screen name="+not-found" />
				<Stack.Screen name="sign-in" />
				<StatusBar style="auto" />
			</Stack>
		</ThemeProvider>
	)
}
