import React, { PropsWithChildren } from 'react'

import { Box } from '@/components/ui/Box/Box'

import { ScreenProps } from './Screen.types'

export const Screen = ({
	children,
	...boxProps
}: Readonly<PropsWithChildren<ScreenProps>>) => {
	return (
		<Box backgroundColor="background" paddingHorizontal="s16" {...boxProps}>
			{children}
		</Box>
	)
}
