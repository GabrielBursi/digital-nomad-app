import React, { memo } from 'react'

import { Accordion, Box, Text } from '@/components/ui'

import type { CityDetailsTouristAttractionsProps } from './CityDetailsTouristAttractions.types'

const CityDetailsTouristAttractionsMemoized = ({
	touristAttractions,
}: Readonly<CityDetailsTouristAttractionsProps>) => {
	return (
		<Box padding="padding">
			<Text variant="title22" mb="s8">
				Pontos turísticos
			</Text>
			<Box gap="s8">
				{touristAttractions.map((attraction) => (
					<Accordion
						key={attraction.id}
						title={attraction.name}
						description={attraction.description}
					/>
				))}
			</Box>
		</Box>
	)
}

export const CityDetailsTouristAttractions = memo(
	CityDetailsTouristAttractionsMemoized
)
