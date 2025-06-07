import React from 'react'
import { StyleSheet } from 'react-native'

import { CitiesList, Screen } from '@/components'

export const HomeScreen = () => {
	return (
		<Screen style={styles.screenContainer}>
			<CitiesList />
		</Screen>
	)
}

const styles = StyleSheet.create({
	screenContainer: {
		paddingHorizontal: 0,
	},
})
