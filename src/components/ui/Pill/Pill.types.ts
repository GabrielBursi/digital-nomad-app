import { PressableProps } from 'react-native'

import { IconName } from '@/components/ui/Icon/Icon.types'

export type PillProps = {
	label: string
	iconName: IconName
	active?: boolean
	onPress?: PressableProps['onPress']
}
