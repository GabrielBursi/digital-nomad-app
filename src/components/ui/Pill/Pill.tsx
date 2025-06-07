import React, { memo } from 'react'
import { Pressable } from 'react-native'

import { Box, Icon, Text } from '@/components'
import { BoxProps } from '@/components/ui/Box/Box.types'

import { PillProps } from './Pill.types'

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
