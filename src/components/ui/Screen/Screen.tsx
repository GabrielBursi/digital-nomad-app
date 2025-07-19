import React, { PropsWithChildren } from 'react'
import { ScrollView, View } from 'react-native'

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
	)
}
