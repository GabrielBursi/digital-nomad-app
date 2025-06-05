import { createTheme } from '@shopify/restyle'

import { palette } from './pallete'

export const theme = createTheme({
	colors: {
		mainBackground: palette.black,
		cardPrimaryBackground: palette.purplePrimary,
		text: palette.white,
	},
	spacing: {
		s: 8,
		m: 16,
		l: 24,
		xl: 40,
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
		defaults: {},
	},
})
