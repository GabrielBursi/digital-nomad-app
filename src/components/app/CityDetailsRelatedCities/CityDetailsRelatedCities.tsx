import React, { memo } from 'react'
import { ScrollView, useWindowDimensions } from 'react-native'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Box, Text } from '@/components/ui'
import { useAppTheme, useRelatedCities } from '@/hooks'

import { CityCard } from '../CityCard/CityCard'

import type { CityDetailsRelatedCitiesProps } from './CityDetailsRelatedCities.types'

const CityDetailsRelatedCitiesMemoized = ({
	id,
}: Readonly<CityDetailsRelatedCitiesProps>) => {
	const cities = useRelatedCities(id)

	const { spacing } = useAppTheme()
	const { bottom } = useSafeAreaInsets()
	const { width } = useWindowDimensions()

	const cardWith = width * 0.7
	const cardHeight = cardWith * 0.9

	return (
		<Box style={{ paddingBottom: bottom }}>
			<Text variant="title22" mb="s16" paddingHorizontal="padding">
				Veja Também
			</Text>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{
					gap: spacing.padding,
					paddingHorizontal: spacing.padding,
				}}
			>
				{cities.map((city) => (
					<CityCard
						key={city.id}
						cityPreview={city}
						style={{ width: cardWith, height: cardHeight }}
					/>
				))}
			</ScrollView>
		</Box>
	)
}

export const CityDetailsRelatedCities = memo(CityDetailsRelatedCitiesMemoized)
