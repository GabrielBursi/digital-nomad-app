import React, { memo } from 'react'
import { Pressable } from 'react-native'

import { useAppTheme } from '@/hooks'

import { Box } from '../Box/Box'
import { Icon } from '../Icon/Icon'

import { IconButtonProps } from './IconButton.types'

const IconButtonMemoized = ({
	iconName,
	onPress,
}: Readonly<IconButtonProps>) => {
	const { boxShadows } = useAppTheme()

	return (
		<Pressable onPress={onPress}>
			<Box
				backgroundColor="primary"
				width={50}
				height={50}
				justifyContent="center"
				alignItems="center"
				borderRadius="rounded"
				style={{ boxShadow: boxShadows.primary }}
			>
				<Icon name={iconName} color="pureWhite" />
			</Box>
		</Pressable>
	)
}

export const IconButton = memo(IconButtonMemoized)
