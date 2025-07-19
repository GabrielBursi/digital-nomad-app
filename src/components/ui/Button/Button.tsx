import React, { memo } from 'react'

import { Text, TouchableOpacityBox } from '@/components'

import type { ButtonColorsConfig, ButtonProps } from './Button.types'

const buttonColorsConfig: ButtonColorsConfig = {
	primary: {
		backgroundColor: 'primary',
		textColor: 'text',
	},
	secondary: {
		backgroundColor: 'gray1',
		textColor: 'text',
	},
}

const ButtonMemoized = ({
	title,
	onPress,
	variant = 'primary',
	...toProps
}: Readonly<ButtonProps>) => {
	const buttonProps = buttonColorsConfig[`${variant}`]
	return (
		<TouchableOpacityBox
			{...toProps}
			onPress={onPress}
			backgroundColor={buttonProps.backgroundColor}
			borderRadius="default"
			padding="padding"
			justifyContent="center"
			alignItems="center"
		>
			<Text color={buttonProps.textColor}>{title}</Text>
		</TouchableOpacityBox>
	)
}

export const Button = memo(ButtonMemoized)
