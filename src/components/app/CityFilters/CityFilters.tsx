import React from 'react'
import { ScrollView } from 'react-native'

import { Box, CategoryPill, SearchInput } from '@/components'

import type { CityFiltersProps } from './CityFilters.types'

export const CityFilters = ({
	categories,
	cityName,
	onChangeCityName,
	selectedCategoryId,
	onChangeSelectedCategoryId,
}: Readonly<CityFiltersProps>) => {
	return (
		<Box>
			<Box paddingHorizontal="padding">
				<SearchInput
					value={cityName}
					onChangeText={onChangeCityName}
					placeholder="Qual seu próximo destino?"
				/>
			</Box>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				<Box mt="s16" flexDirection="row" gap="s8" paddingHorizontal="padding">
					{categories.map((category) => (
						<CategoryPill
							key={category.id}
							active={category.id === selectedCategoryId}
							category={category}
							onPress={() =>
								onChangeSelectedCategoryId(
									category.id === selectedCategoryId ? null : category.id
								)
							}
						/>
					))}
				</Box>
			</ScrollView>
		</Box>
	)
}
