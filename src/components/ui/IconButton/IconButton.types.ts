import type { PressableProps } from 'react-native'

import type { IconName } from '../Icon/Icon.types'

export type IconButtonProps = {
	iconName: IconName
	onPress: NonNullable<PressableProps['onPress']>
}
