import React, { memo } from 'react'
import { Pressable } from 'react-native'

import { BoxProps } from '@/components/ui/Box/Box.types'

import { Box } from '../Box/Box'
import { Icon } from '../Icon/Icon'
import { Text } from '../Text/Text'

import { PillProps } from './Pill.types'

/**
 * The height of the pill is the sum of the icon size, padding, and border width.
 * This is used to calculate the marginTop of the pill to center it vertically.
 */
export const PILL_HEIGHT = 16 + 16 + 4

const PillMemoized = ({
	label,
	iconName,
	active = false,
	onPress,
}: Readonly<PillProps>) => {
	return (
		<Pressable onPress={onPress}>
			<Box {...boxStyle} backgroundColor={active ? 'gray1' : 'transparent'}>
				<Icon name={iconName} size={16} color={active ? 'primary' : 'gray2'} />
				<Text ml="s4" variant="text12">
					{label}
				</Text>
			</Box>
		</Pressable>
	)
}

const boxStyle: BoxProps = {
	flexDirection: 'row',
	alignItems: 'center',
	borderWidth: 2,
	borderRadius: 'rounded',
	borderColor: 'gray1',
	paddingVertical: 's8',
	paddingHorizontal: 's12',
}

export const Pill = memo(PillMemoized)
