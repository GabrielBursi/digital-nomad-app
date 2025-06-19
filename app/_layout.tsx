/* eslint-disable @typescript-eslint/no-require-imports */
import { ThemeProvider } from '@shopify/restyle'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import { theme } from '@/theme'
import 'react-native-reanimated'

export default function RootLayout() {
	const [loaded] = useFonts({
		IcoMoon: require('../assets/icons/icomoon.ttf') as number,
		PoppinsBlack: require('../assets/fonts/Poppins-Black.ttf') as number,
		PoppinsBlackItalic:
			require('../assets/fonts/Poppins-BlackItalic.ttf') as number,
		PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf') as number,
		PoppinsBoldItalic:
			require('../assets/fonts/Poppins-BoldItalic.ttf') as number,
		PoppinsExtraBold:
			require('../assets/fonts/Poppins-ExtraBold.ttf') as number,
		PoppinsExtraBoldItalic:
			require('../assets/fonts/Poppins-ExtraBoldItalic.ttf') as number,
		PoppinsExtraLight:
			require('../assets/fonts/Poppins-ExtraLight.ttf') as number,
		PoppinsExtraLightItalic:
			require('../assets/fonts/Poppins-ExtraLightItalic.ttf') as number,
		PoppinsItalic: require('../assets/fonts/Poppins-Italic.ttf') as number,
		PoppinsLight: require('../assets/fonts/Poppins-Light.ttf') as number,
		PoppinsLightItalic:
			require('../assets/fonts/Poppins-LightItalic.ttf') as number,
		PoppinsMedium: require('../assets/fonts/Poppins-Medium.ttf') as number,
		PoppinsMediumItalic:
			require('../assets/fonts/Poppins-MediumItalic.ttf') as number,
		PoppinsRegular: require('../assets/fonts/Poppins-Regular.ttf') as number,
		PoppinsSemiBold: require('../assets/fonts/Poppins-SemiBold.ttf') as number,
		PoppinsSemiBoldItalic:
			require('../assets/fonts/Poppins-SemiBoldItalic.ttf') as number,
		PoppinsThin: require('../assets/fonts/Poppins-Thin.ttf') as number,
		PoppinsThinItalic:
			require('../assets/fonts/Poppins-ThinItalic.ttf') as number,
	})

	if (!loaded) return null

	return (
		<ThemeProvider theme={theme}>
			<Stack
				screenOptions={{
					contentStyle: { backgroundColor: theme.colors.background },
				}}
			>
				<Stack.Screen name="(protected)" options={{ headerShown: false }} />
				<Stack.Screen name="+not-found" />
				<Stack.Screen name="sign-in" />
			</Stack>
			<StatusBar style="light" />
		</ThemeProvider>
	)
}
