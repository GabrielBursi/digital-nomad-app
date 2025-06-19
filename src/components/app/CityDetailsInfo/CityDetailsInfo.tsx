import React, { memo } from 'react'

import { Box, Text } from '@/components'

import type { CityDetailsInfoProps } from './CityDetailsInfo.types'

const CityDetailsInfoMemoized = ({
	country,
	description,
	name,
}: Readonly<CityDetailsInfoProps>) => {
	return (
		<Box padding="padding">
			<Text variant="title28" mb="s2">
				{name}
			</Text>
			<Text variant="text18" mb="s24">
				{country}
			</Text>
			<Text variant="text14">{description}</Text>
		</Box>
	)
}

export const CityDetailsInfo = memo(CityDetailsInfoMemoized)
