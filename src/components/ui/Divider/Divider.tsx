import React, { memo } from 'react'

import { Box } from '../Box/Box'

import type { DividerProps } from './Divider.types'

const DividerMemoized = (props: DividerProps) => {
	return (
		<Box marginVertical="s24" {...props}>
			<Box alignSelf="center" width="100%" height={1} backgroundColor="gray1" />
		</Box>
	)
}

export const Divider = memo(DividerMemoized)
