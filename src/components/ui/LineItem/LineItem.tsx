import React, { memo } from 'react'

import { Box } from '../Box/Box'
import { Text } from '../Text/Text'

import type { LineItemProps } from './LineItem.types'

const LineItemMemoized = ({ label, value }: Readonly<LineItemProps>) => {
	return (
		<Box flexDirection="row" justifyContent="space-between">
			<Text variant="text14" color="gray2">
				{label}
			</Text>
			<Text variant="text14" color="text">
				{value}
			</Text>
		</Box>
	)
}

export const LineItem = memo(LineItemMemoized)
