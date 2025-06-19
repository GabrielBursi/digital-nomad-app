import React, { memo } from 'react'

import { Box } from '@/components'

import type { BlackOpacityProps } from './BlackOpacity.types'

const BlackOpacityMemoized = ({ opacity = 0.25 }: BlackOpacityProps) => {
	return (
		<Box
			position="absolute"
			width="100%"
			height="100%"
			backgroundColor="midnightBlack"
			opacity={opacity}
		/>
	)
}

export const BlackOpacity = memo(BlackOpacityMemoized)
