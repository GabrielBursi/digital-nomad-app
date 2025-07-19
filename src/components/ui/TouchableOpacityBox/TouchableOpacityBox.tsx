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

export const TouchableOpacityBox = createRestyleComponent<
	TouchableOpacityBoxProps,
	Theme
>(
	[backgroundColor, spacing, spacingShorthand, layout, border],
	RNTouchableOpacity
)
