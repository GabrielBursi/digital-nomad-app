import type { TextInputProps } from 'react-native'

export type SearchInputProps = Pick<
	TextInputProps,
	'value' | 'onChangeText' | 'placeholder'
>
