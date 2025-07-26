import React, { memo, useState } from 'react'
import { TextInput as RNTextInput, StyleSheet } from 'react-native'

import { useAppTheme } from '@/hooks'

import { Box } from '../Box/Box'
import type { BoxProps } from '../Box/Box.types'
import { Text } from '../Text/Text'

import type { TextInputProps } from './TextInput.types'

const TextInputMemoized = ({
	label,
	errorMessage,
	...textInputProps
}: Readonly<TextInputProps>) => {
	const { colors, textVariants } = useAppTheme()
	const [isFocused, setIsFocused] = useState(false)

	const defaultBorderColor = isFocused ? 'text' : 'gray1'
	const borderColor = errorMessage ? 'fbErrorSurface' : defaultBorderColor

	return (
		<Box>
			<Text mb="s4" variant="title14">
				{label}
			</Text>
			<Box {...textInputBoxStyle} borderColor={borderColor}>
				<RNTextInput
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					placeholderTextColor={colors.gray2}
					{...textInputProps}
					style={[
						{
							...textVariants.title16,
							color: colors.text,
						},
						styles.textInput,
					]}
				/>
			</Box>
			{errorMessage && (
				<Text mb="s4" variant="text12" color="fbErrorSurface">
					{errorMessage}
				</Text>
			)}
		</Box>
	)
}

const styles = StyleSheet.create({
	textInput: {
		flexShrink: 1,
		height: '100%',
		width: '100%',
	},
})

const textInputBoxStyle: BoxProps = {
	flexDirection: 'row',
	alignItems: 'center',
	paddingHorizontal: 's16',
	borderWidth: 2,
	borderRadius: 'default',
	height: 50,
	mb: 's4',
}

export const TextInput = memo(TextInputMemoized)
