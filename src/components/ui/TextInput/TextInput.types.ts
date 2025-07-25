import { type TextInputProps as RNTextInputProps } from 'react-native'

export type TextInputProps = RNTextInputProps & {
	label: string
	errorMessage?: string
}
