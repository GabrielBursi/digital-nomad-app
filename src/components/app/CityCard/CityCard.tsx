import React, { memo } from 'react'
import { ImageBackground, Pressable, StyleSheet } from 'react-native'

import { Link } from 'expo-router'

import {
	BlackOpacity,
	Box,
	Icon,
	Text,
	TouchableOpacityBox,
} from '@/components/ui'
import { useCityToggleFavorite } from '@/domain/city/useCases'
import { useAppTheme, useImageSource } from '@/hooks'

import { CityCardProps } from './CityCard.types'

const CityCardMemoized = ({ cityPreview, style }: Readonly<CityCardProps>) => {
	const { borderRadii } = useAppTheme()
	const coverImage = useImageSource(cityPreview.coverImage)
	const { toggleFavorite } = useCityToggleFavorite()

	return (
		<Link push href={`/city-details/${cityPreview.id}`} asChild>
			<Pressable>
				<ImageBackground
					source={coverImage}
					style={[styles.cityImage, style]}
					imageStyle={{ borderRadius: borderRadii.default }}
				>
					<BlackOpacity />
					<Box flex={1} padding="s24" justifyContent="space-between">
						<TouchableOpacityBox
							alignSelf="flex-end"
							onPress={() => {
								toggleFavorite({ cityId: cityPreview.id, isFavorite: false })
							}}
						>
							<Icon name="Favorite-outline" color="text" />
						</TouchableOpacityBox>

						<Box>
							<Text variant="title22">{cityPreview.name}</Text>
							<Text variant="text16">{cityPreview.country}</Text>
						</Box>
					</Box>
				</ImageBackground>
			</Pressable>
		</Link>
	)
}

const styles = StyleSheet.create({
	cityImage: {
		height: 280,
		width: '100%',
	},
})

export const CityCard = memo(CityCardMemoized)
