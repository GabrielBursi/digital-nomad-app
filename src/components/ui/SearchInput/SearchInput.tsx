import React, { memo, useState } from 'react'
import { StyleSheet, TextInput } from 'react-native'

import { Box, IconButton } from '@/components'
import { useAppTheme } from '@/hooks'

import type { BoxProps } from '../Box/Box.types'

import type { SearchInputProps } from './SearchInput.types'

const SearchInputMemoized = ({
	value,
	onChangeText,
	placeholder,
}: Readonly<SearchInputProps>) => {
	const { colors, textVariants } = useAppTheme()
	const [isFocused, setIsFocused] = useState(false)

	function onPressIconButton() {
		if (value!.length > 0) {
			onChangeText?.('')
		}
	}

	return (
		<Box
			{...boxStyle}
			style={{ borderColor: isFocused ? colors.primary : colors.gray1 }}
		>
			<TextInput
				value={value}
				onChangeText={onChangeText}
				placeholder={placeholder}
				placeholderTextColor={colors.text}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				style={[
					{ ...textVariants.title16, color: colors.text },
					styles.textInput,
				]}
			/>
			<IconButton
				iconName={value!.length > 0 ? 'Close' : 'Search-outline'}
				onPress={onPressIconButton}
			/>
		</Box>
	)
}

const boxStyle: BoxProps = {
	flexDirection: 'row',
	alignItems: 'center',
	padding: 's8',
	justifyContent: 'space-between',
	backgroundColor: 'gray1',
	paddingLeft: 's16',
	height: 70,
	borderRadius: 'rounded',
	borderWidth: 2,
}

const styles = StyleSheet.create({
	textInput: {
		flexShrink: 1,
		height: '100%',
		width: '100%',
	},
})

export const SearchInput = memo(SearchInputMemoized)
