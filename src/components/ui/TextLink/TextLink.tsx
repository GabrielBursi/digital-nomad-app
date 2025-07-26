import React, { memo } from 'react'
import { Pressable } from 'react-native'

import { router } from 'expo-router'

import { Text } from '@/components'

import type { TextLinkProps } from './TextLink.types'

const TextLinkMemoized = ({
	text,
	ctaText,
	href,
	goBackOnPress,
}: Readonly<TextLinkProps>) => {
	const handleOnPress = () => {
		if (href) {
			router.navigate(href)
		} else if (goBackOnPress) {
			router.back()
		}
	}

	return (
		<Pressable onPress={handleOnPress}>
			<Text alignSelf="center" mt="s16" color="gray2">
				{text}{' '}
				<Text variant="title14" color="primary">
					{ctaText}
				</Text>
			</Text>
		</Pressable>
	)
}

export const TextLink = memo(TextLinkMemoized)
