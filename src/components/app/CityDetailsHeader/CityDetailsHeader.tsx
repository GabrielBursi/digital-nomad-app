import React, { memo } from 'react'
import { ImageBackground, ScrollView, StyleSheet } from 'react-native'

import { router } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import {
	BlackOpacity,
	Box,
	CategoryPill,
	Icon,
	IconButton,
	PILL_HEIGHT,
} from '@/components'

import type { CityDetailsHeaderProps } from './CityDetailsHeader.types'

const CityDetailsHeaderMemoized = ({
	coverImage,
	categories,
}: Readonly<CityDetailsHeaderProps>) => {
	const { top } = useSafeAreaInsets()

	return (
		<Box>
			<ImageBackground
				source={coverImage}
				style={styles.boxImageBackground}
				imageStyle={styles.imageBackground}
			>
				<BlackOpacity />
				<Box
					flexDirection="row"
					justifyContent="space-between"
					alignItems="center"
					padding="padding"
					style={{ paddingTop: top }}
				>
					<IconButton iconName="Chevron-left" onPress={router.back} />
					<Icon name="Favorite-outline" size={30} color="pureWhite" />
				</Box>
			</ImageBackground>
			<ScrollView
				horizontal
				bounces={false}
				showsHorizontalScrollIndicator={false}
				style={{ marginTop: -PILL_HEIGHT / 2 }}
			>
				<Box flexDirection="row" gap="s8" paddingHorizontal="padding">
					{categories.map((category) => (
						<CategoryPill active={true} key={category.id} category={category} />
					))}
				</Box>
			</ScrollView>
		</Box>
	)
}

const styles = StyleSheet.create({
	boxImageBackground: {
		height: 250,
		width: '100%',
	},
	imageBackground: {
		borderBottomRightRadius: 40,
	},
})

export const CityDetailsHeader = memo(CityDetailsHeaderMemoized)
