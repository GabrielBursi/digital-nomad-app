import React, { memo } from 'react'
import { StyleSheet, useWindowDimensions } from 'react-native'

import MapView from 'react-native-maps'

import { BottomSheet, Box, IconButton } from '@/components'
import { useAppTheme } from '@/hooks'

import type { BottomSheetMapProps } from './BottomSheetMap.types'

const BottomSheetMapMemoized = ({
	location,
	...bottomSheetProps
}: Readonly<BottomSheetMapProps>) => {
	const { height } = useWindowDimensions()
	const { borderRadii, spacing } = useAppTheme()
	return (
		<BottomSheet {...bottomSheetProps}>
			<MapView
				style={[
					{
						height: height * 0.7,
						borderRadius: borderRadii.default,
					},
					styles.mapBox,
				]}
				initialRegion={{
					latitude: location.latitude,
					longitude: location.longitude,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.2,
				}}
			/>
			<Box position="absolute" top={spacing.padding} right={spacing.padding}>
				<IconButton iconName="Close" onPress={bottomSheetProps.onPress} />
			</Box>
		</BottomSheet>
	)
}

const styles = StyleSheet.create({
	mapBox: {
		width: '100%',
	},
})

export const BottomSheetMap = memo(BottomSheetMapMemoized)
