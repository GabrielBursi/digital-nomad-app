import React, { memo } from 'react'
import { ImageBackground, StyleSheet } from 'react-native'

import { BlackOpacity, Box, Icon, Text } from '@/components/ui'
import { useAppTheme } from '@/hooks'

import { CityCardProps } from './CityCard.types'

const CityCardMemoized = ({ cityPreview }: Readonly<CityCardProps>) => {
	const { borderRadii } = useAppTheme()
	return (
		<ImageBackground
			source={cityPreview.coverImage}
			style={styles.cityImage}
			imageStyle={{ borderRadius: borderRadii.default }}
		>
			<BlackOpacity />
			<Box flex={1} padding="s24" justifyContent="space-between">
				<Box alignSelf="flex-end">
					<Icon name="Favorite-outline" color="text" />
				</Box>

				<Box>
					<Text variant="title22">{cityPreview.name}</Text>
					<Text variant="text16">{cityPreview.country}</Text>
				</Box>
			</Box>
		</ImageBackground>
	)
}

const styles = StyleSheet.create({
	cityImage: {
		height: 280,
		width: '100%',
	},
})

export const CityCard = memo(CityCardMemoized)
