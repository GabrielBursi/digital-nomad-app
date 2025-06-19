import { SharedValue } from 'react-native-reanimated'

export type BottomSheetProps = {
	onPress: () => void
	isOpen: SharedValue<boolean>
	/** @default 600 */
	duration?: number
}
