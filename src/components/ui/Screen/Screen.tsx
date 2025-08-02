import React, { PropsWithChildren } from 'react'
import {
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	StyleSheet,
	View,
} from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

import { Box } from '@/components/ui/Box/Box'

import { ScreenProps } from './Screen.types'

export const Screen = ({
	children,
	scrollable = false,
	...boxProps
}: Readonly<PropsWithChildren<ScreenProps>>) => {
	const Container = scrollable ? ScrollView : View

	return (
		<KeyboardAvoidingView
			style={styles.keyboardContainer}
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
		>
			<Box
				flex={1}
				backgroundColor="background"
				paddingHorizontal="padding"
				{...boxProps}
			>
				<SafeAreaView>
					<Container>{children}</Container>
				</SafeAreaView>
			</Box>
		</KeyboardAvoidingView>
	)
}

const styles = StyleSheet.create({
	keyboardContainer: {
		flex: 1,
	},
})
