import React, { memo } from 'react'
import { Image, StyleSheet } from 'react-native'

const LogoMemoized = () => {
	return (
		<Image
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-require-imports
			source={require('../../../../assets/images/logo.png')}
			style={styles.logo}
		/>
	)
}

const styles = StyleSheet.create({
	logo: {
		alignSelf: 'center',
		height: 60,
		marginBottom: 60,
		marginTop: 20,
		width: 150,
	},
})

export const Logo = memo(LogoMemoized)
