import React, { memo } from 'react'

import type { IconName } from '@/components/ui/Icon/Icon.types'
import { Pill } from '@/components/ui/Pill/Pill'
import type { CategoryCode } from '@/types/category'

import type { CategoryPillProps } from './CategoryPill.types'

const CategoryPillMemoized = ({
	category,
	...pillProps
}: Readonly<CategoryPillProps>) => {
	return (
		<Pill
			iconName={categoryIconMap[category.code]}
			label={category.name}
			{...pillProps}
		/>
	)
}

const categoryIconMap: Record<CategoryCode, IconName> = {
	ADVENTURE: 'Adventure',
	BEACH: 'Beach',
	CULTURE: 'Culture',
	GASTRONOMY: 'Gastronomy',
	HISTORY: 'History',
	LUXURY: 'Luxury',
	NATURE: 'Nature',
	URBAN: 'Urban',
	SHOPPING: 'Shopping',
	FAVORITE: 'Star',
}

export const CategoryPill = memo(CategoryPillMemoized)
