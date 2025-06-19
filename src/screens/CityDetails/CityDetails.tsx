import React from 'react'
import { Pressable, StyleSheet } from 'react-native'

import { useLocalSearchParams } from 'expo-router'
import { useSharedValue } from 'react-native-reanimated'

import {
	BottomSheetMap,
	CityDetailsHeader,
	CityDetailsInfo,
	CityDetailsMap,
	CityDetailsRelatedCities,
	CityDetailsTouristAttractions,
	Divider,
	Screen,
	Text,
} from '@/components'
import { useCityDetails } from '@/hooks'

export const CityDetailsScreen = () => {
	const { id } = useLocalSearchParams<{ id: string }>()
	const city = useCityDetails(id)

	const bottomSheetIsOpen = useSharedValue(false)

	const toggleBottomSheet = () => {
		bottomSheetIsOpen.value = !bottomSheetIsOpen.value
	}

	if (!city) {
		return (
			<Screen flex={1} justifyContent="center" alignItems="center">
				<Text>City not found</Text>
			</Screen>
		)
	}

	return (
		<>
			<Screen style={styles.screenBox} scrollable>
				<CityDetailsHeader
					coverImage={city.coverImage}
					categories={city.categories}
				/>
				<CityDetailsInfo
					name={city.name}
					country={city.country}
					description={city.description}
				/>
				<Divider paddingHorizontal="padding" />
				<CityDetailsTouristAttractions
					touristAttractions={city.touristAttractions}
				/>

				<Divider paddingHorizontal="padding" />
				<Pressable onPress={toggleBottomSheet}>
					<CityDetailsMap location={city.location} />
				</Pressable>

				<Divider paddingHorizontal="padding" />
				<CityDetailsRelatedCities relatedCitiesIds={city.relatedCitiesIds} />
			</Screen>
			<BottomSheetMap
				location={city.location}
				isOpen={bottomSheetIsOpen}
				onPress={toggleBottomSheet}
			/>
		</>
	)
}

const styles = StyleSheet.create({
	screenBox: {
		paddingHorizontal: 0,
	},
})
