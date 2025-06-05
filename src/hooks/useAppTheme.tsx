import { useTheme } from '@shopify/restyle'

import type { Theme } from '@/types/theme'

export const useAppTheme = () => {
	return useTheme<Theme>()
}
