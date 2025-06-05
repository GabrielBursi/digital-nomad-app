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
		header: {
			fontWeight: 'bold',
			fontSize: 34,
		},
		body: {
			fontSize: 16,
			lineHeight: 24,
		},
		defaults: {
			color: 'text',
		},
		borderRadii: {
			default: 16,
		},
	},
})
