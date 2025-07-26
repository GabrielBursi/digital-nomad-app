import React, { memo } from 'react'

import { router } from 'expo-router'

import { IconButton } from '../IconButton/IconButton'

const GoBackMemoized = () => {
	return <IconButton iconName="Chevron-left" onPress={router.back} />
}

export const GoBack = memo(GoBackMemoized)
