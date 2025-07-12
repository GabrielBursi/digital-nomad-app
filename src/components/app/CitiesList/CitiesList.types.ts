import { ComponentProps } from 'react'

import Animated from 'react-native-reanimated'

import type { CityPreview } from '@/domain/city'

export type CitiesListProps = Omit<
	ComponentProps<typeof Animated.FlatList<CityPreview>>,
	| 'contentContainerStyle'
	| 'data'
	| 'renderItem'
	| 'showsVerticalScrollIndicator'
	| 'keyExtractor'
	| 'ListHeaderComponent'
>
