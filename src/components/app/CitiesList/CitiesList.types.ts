import type { FlatListProps } from 'react-native'

import type { CityPreview } from '@/types/city'

export type CitiesListProps = Omit<
	FlatListProps<CityPreview>,
	| 'contentContainerStyle'
	| 'data'
	| 'renderItem'
	| 'showsVerticalScrollIndicator'
	| 'keyExtractor'
	| 'ListHeaderComponent'
>
