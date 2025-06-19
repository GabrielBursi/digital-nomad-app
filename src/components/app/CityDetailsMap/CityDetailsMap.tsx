import React, { memo } from 'react'
import { StyleSheet } from 'react-native'

import MapView from 'react-native-maps'

import { Box, Text } from '@/components'
import { useAppTheme } from '@/hooks'

import type { CityDetailsMapProps } from './CityDetailsMap.types'

const CityDetailsMapMemoized = ({
	location,
}: Readonly<CityDetailsMapProps>) => {
	const { borderRadii } = useAppTheme()
	return (
		<Box padding="padding">
			<Text variant="title22" mb="s16">
				Mapa
			</Text>
			<MapView
				style={[
					{
						borderRadius: borderRadii.default,
					},
					styles.mapBox,
				]}
				initialRegion={{
					latitude: location.latitude,
					longitude: location.longitude,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
			/>
		</Box>
	)
}

const styles = StyleSheet.create({
	mapBox: {
		height: 200,
		width: '100%',
	},
})

export const CityDetailsMap = memo(CityDetailsMapMemoized)
