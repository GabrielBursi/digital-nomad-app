import React, { memo, PropsWithChildren } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import Animated, {
	useAnimatedStyle,
	useDerivedValue,
	useSharedValue,
	withDelay,
	withTiming,
} from 'react-native-reanimated'

import { theme } from '@/theme'

import type { BottomSheetProps } from './BottomSheet.types'

const BottomSheetMemoized = ({
	children,
	onPress,
	isOpen,
	duration = 600,
}: Readonly<PropsWithChildren<BottomSheetProps>>) => {
	const height = useSharedValue(0)

	const progress = useDerivedValue(() =>
		withTiming(isOpen.value ? 0 : 1, { duration })
	)

	const sheetAnimatedStyle = useAnimatedStyle(() => ({
		transform: [{ translateY: progress.value * height.value }],
		zIndex: 2,
	}))

	const backdropAnimatedStyle = useAnimatedStyle(() => ({
		opacity: 1 - progress.value,
		zIndex: isOpen.value
			? 1
			: withDelay(duration, withTiming(-1, { duration: 0 })),
	}))

	return (
		<>
			<Animated.View style={[styles.backdrop, backdropAnimatedStyle]}>
				<TouchableOpacity style={styles.backdropBackground} onPress={onPress} />
			</Animated.View>

			<Animated.View
				style={[styles.sheet, sheetAnimatedStyle]}
				onLayout={(e) => {
					height.value = e.nativeEvent.layout.height
				}}
			>
				{children}
			</Animated.View>
		</>
	)
}

const styles = StyleSheet.create({
	backdrop: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: theme.colors.shadow,
	},
	backdropBackground: {
		flex: 1,
	},
	sheet: {
		bottom: 0,
		position: 'absolute',
		width: '100%',
	},
})

export const BottomSheet = memo(BottomSheetMemoized)
