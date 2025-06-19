import React, { memo, useRef, useState } from 'react'
import { FlatList } from 'react-native'

import { useScrollToTop } from '@react-navigation/native'
import Animated, { FadingTransition } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Box } from '@/components/ui/Box/Box'
import { categories } from '@/data'
import { useAppTheme, useCitiesFilter, useDebounce } from '@/hooks'
import type { CityPreview } from '@/types/city'

import { CityCard } from '../CityCard/CityCard'
import { CityFilters } from '../CityFilters/CityFilters'

import type { CitiesListProps } from './CitiesList.types'

const CitiesListMemoized = (props: Readonly<CitiesListProps>) => {
	const { spacing } = useAppTheme()
	const { top } = useSafeAreaInsets()
	const [cityName, setCityName] = useState('')

	const debouncedCityName = useDebounce(cityName)
	const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
		null
	)

	const { cityPreviewList } = useCitiesFilter({
		name: debouncedCityName,
		categoryId: selectedCategoryId,
	})

	const flatListRef = useRef<FlatList<CityPreview>>(null)
	useScrollToTop(flatListRef)

	return (
		<Animated.FlatList
			itemLayoutAnimation={FadingTransition.duration(500)}
			{...props}
			ref={flatListRef}
			contentContainerStyle={{
				gap: spacing.padding,
				paddingTop: top,
				paddingBottom: spacing.padding,
			}}
			data={cityPreviewList}
			renderItem={({ item: city }) => (
				<Box paddingHorizontal="padding">
					<CityCard cityPreview={city} />
				</Box>
			)}
			showsVerticalScrollIndicator={false}
			keyExtractor={(item) => item.id}
			ListHeaderComponent={
				<CityFilters
					categories={categories}
					cityName={cityName}
					onChangeCityName={setCityName}
					selectedCategoryId={selectedCategoryId}
					onChangeSelectedCategoryId={setSelectedCategoryId}
				/>
			}
		/>
	)
}

export const CitiesList = memo(CitiesListMemoized)
