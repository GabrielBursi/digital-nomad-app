import React, { memo } from 'react'

import createIconSetFromIcoMoon from '@expo/vector-icons/createIconSetFromIcoMoon'

import { useAppTheme } from '@/hooks'

import { IconProps } from './Icon.types'

const IconFromIcoMoon = createIconSetFromIcoMoon(
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	require('../../../../assets/icons/selection.json') as number,
	'IcoMoon',
	'icomoon.ttf'
)

const IconMemoized = ({
	name,
	color = 'gray2',
	size = 24,
}: Readonly<IconProps>) => {
	const { colors } = useAppTheme()
	return <IconFromIcoMoon name={name} size={size} color={colors[`${color}`]} />
}

export const Icon = memo(IconMemoized)
