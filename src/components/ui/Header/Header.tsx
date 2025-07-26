import React, { memo } from 'react'

import { Box } from '../Box/Box'
import { GoBack } from '../GoBack/GoBack'
import { Text } from '../Text/Text'

import type { HeaderProps } from './Header.types'

const HeaderMemoized = ({ title }: Readonly<HeaderProps>) => {
	return (
		<Box
			flexDirection="row"
			justifyContent="space-between"
			alignItems="center"
			mb="s56"
		>
			<GoBack />
			<Text variant="title16">{title}</Text>
		</Box>
	)
}

export const Header = memo(HeaderMemoized)
