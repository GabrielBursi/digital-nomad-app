import { ThemeColors } from '@/types/theme'

import { TouchableOpacityBoxProps } from '../TouchableOpacityBox/TouchableOpacityBox.types'

export type ButtonVariant = 'primary' | 'secondary'

export type ButtonColorsConfig = Record<
	ButtonVariant,
	{ backgroundColor: ThemeColors; textColor: ThemeColors }
>

export type ButtonProps = TouchableOpacityBoxProps & {
	title: string
	onPress: () => void
	variant?: ButtonVariant
}
