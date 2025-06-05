import { createTheme } from '@shopify/restyle'

import { palette } from './pallete'

export const theme = createTheme({
	colors: {
		background: palette.midnightBlack,
		primary: palette.fieryRed,
		text: palette.pureWhite,
		gray1: palette.charcoalGrey,
		gray2: palette.stoneGrey,
	},
	spacing: {
		s2: 2,
		s4: 4,
		s8: 8,
		s10: 10,
		s12: 12,
		s14: 14,
		s16: 16,
		s20: 20,
		s24: 24,
		s32: 32,
		s40: 40,
		s48: 48,
		s56: 56,
	},
	textVariants: {
		defaults: {
			color: 'text',
			fontFamily: 'PoppinsRegular',
		},
		title28: {
			fontSize: 28,
			fontFamily: 'PoppinsSemiBold',
		},
		title22: {
			fontSize: 22,
			fontFamily: 'PoppinsSemiBold',
		},
		title16: {
			fontSize: 16,
			fontFamily: 'PoppinsSemiBold',
		},
		text18: {
			fontSize: 18,
		},
		text16: {
			fontSize: 16,
		},
		text14: {
			fontSize: 14,
		},
		text12: {
			fontSize: 12,
		},
	},
	borderRadii: {
		default: 16,
	},
})
