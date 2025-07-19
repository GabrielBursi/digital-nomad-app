import { TouchableOpacityProps as RNTouchableOpacityProps } from 'react-native'

import {
	BackgroundColorProps,
	BorderProps,
	LayoutProps,
	SpacingProps,
	SpacingShorthandProps,
} from '@shopify/restyle'

import { Theme } from '@/types/theme'

type RestyleTypes = BackgroundColorProps<Theme> &
	SpacingProps<Theme> &
	LayoutProps<Theme> &
	BorderProps<Theme> &
	SpacingShorthandProps<Theme>

export type TouchableOpacityBoxProps = RNTouchableOpacityProps & RestyleTypes
