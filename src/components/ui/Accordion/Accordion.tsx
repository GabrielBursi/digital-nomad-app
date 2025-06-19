/* eslint-disable @typescript-eslint/no-require-imports */
import React, { memo } from 'react'
import { Animated, Pressable, StyleSheet, View } from 'react-native'

import {
	interpolate,
	interpolateColor,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated'

import { useAppTheme } from '@/hooks'
import { theme } from '@/theme'

import { Box } from '../Box/Box'
import { Text } from '../Text/Text'

import type {
	AccordionBodyProps,
	AccordionHeaderProps,
	AccordionProps,
} from './Accordion.types'

const AccordionHeader = ({
	title,
	progress,
}: Readonly<AccordionHeaderProps>) => {
	const { colors, borderRadii } = useAppTheme()

	const iconAnimatedStyle = useAnimatedStyle(() => ({
		tintColor: interpolateColor(
			progress.value,
			[0, 1],
			[colors.gray2, colors.primary]
		),
		transform: [
			{
				rotate: interpolate(progress.value, [0, 1], [0, -180]) + 'deg',
			},
		],
	}))

	const animatedStyle = useAnimatedStyle(() => ({
		backgroundColor: interpolateColor(
			progress.value,
			[0, 1],
			[colors.transparent, colors.gray1]
		),
		borderBottomLeftRadius: interpolate(
			progress.value,
			[0, 1],
			[borderRadii.default, 0]
		),
		borderBottomRightRadius: interpolate(
			progress.value,
			[0, 1],
			[borderRadii.default, 0]
		),
	}))

	return (
		<Animated.View style={[styles.header, animatedStyle]}>
			<Box flexShrink={1}>
				<Text variant="title16">{title}</Text>
			</Box>

			<Animated.Image
				source={require('@/assets/images/chevron-down.png') as number}
				style={[iconAnimatedStyle, styles.icon]}
			/>
		</Animated.View>
	)
}

const AccordionBody = ({
	description,
	progress,
}: Readonly<AccordionBodyProps>) => {
	const { borderRadii } = useAppTheme()
	const height = useSharedValue(0)

	const animatedStyle = useAnimatedStyle(() => {
		return {
			opacity: interpolate(progress.value, [0, 1], [0, 1]),
			height: interpolate(progress.value, [0, 1], [0, height.value]),
			borderTopLeftRadius: interpolate(
				progress.value,
				[0, 1],
				[borderRadii.default, 0]
			),
			borderTopRightRadius: interpolate(
				progress.value,
				[0, 1],
				[borderRadii.default, 0]
			),
		}
	})

	return (
		<Animated.View style={[animatedStyle, styles.container]}>
			<View
				style={styles.body}
				onLayout={(e) => {
					height.value = e.nativeEvent.layout.height
				}}
			>
				<Text>{description}</Text>
			</View>
		</Animated.View>
	)
}

const AccordionMemoized = ({
	title,
	description,
}: Readonly<AccordionProps>) => {
	const isOpen = useSharedValue(false)
	const progress = useSharedValue(0)

	const handleOpenPress = () => {
		isOpen.value = !isOpen.value
		progress.value = withTiming(isOpen.value ? 0 : 1, { duration: 600 })
	}

	return (
		<Pressable onPress={handleOpenPress}>
			<View>
				<AccordionHeader title={title} progress={progress} />
				<AccordionBody description={description} progress={progress} />
			</View>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	body: {
		backgroundColor: theme.colors.gray1,
		borderBottomLeftRadius: theme.borderRadii.default,
		borderBottomRightRadius: theme.borderRadii.default,
		paddingBottom: 16,
		paddingHorizontal: 16,
		position: 'absolute',
	},
	container: {
		overflow: 'hidden',
	},
	header: {
		alignItems: 'center',
		borderColor: theme.colors.gray1,
		borderRadius: theme.borderRadii.default,
		borderWidth: 2,
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 16,
	},
	icon: {
		height: 24,
		width: 24,
	},
})

export const Accordion = memo(AccordionMemoized)
