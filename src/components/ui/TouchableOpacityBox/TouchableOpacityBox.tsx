import { memo } from 'react'
import { TouchableOpacity as RNTouchableOpacity } from 'react-native'

import {
	backgroundColor,
	border,
	createRestyleComponent,
	layout,
	spacing,
	spacingShorthand,
} from '@shopify/restyle'

import type { Theme } from '@/types/theme'

import type { TouchableOpacityBoxProps } from './TouchableOpacityBox.types'

const TouchableOpacityBoxMemoized = createRestyleComponent<
	TouchableOpacityBoxProps,
	Theme
>(
	[backgroundColor, spacing, spacingShorthand, layout, border],
	RNTouchableOpacity
)
export const TouchableOpacityBox = memo(TouchableOpacityBoxMemoized)
