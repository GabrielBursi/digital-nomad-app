import { ThemeColors } from '@/types/theme'

export type IconName =
	| 'Adventure'
	| 'Beach'
	| 'Chevron-down'
	| 'Chevron-left'
	| 'Chevron-right'
	| 'Chevron-up'
	| 'Close'
	| 'Culture'
	| 'Explore'
	| 'Favorite-fill'
	| 'Favorite-outline'
	| 'Gastronomy'
	| 'Group'
	| 'History'
	| 'Home-fill'
	| 'Home-outline'
	| 'Luxury'
	| 'Nature'
	| 'Search-outline'
	| 'Shopping'
	| 'Star'
	| 'Urban'
	| 'Person-fill'
	| 'Person-outline'
	| 'Logout'

export type IconProps = {
	name: IconName
	color?: ThemeColors
	size?: number
}
