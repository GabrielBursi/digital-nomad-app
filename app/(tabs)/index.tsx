import { StyleSheet } from 'react-native'

import { Image } from 'expo-image'

import ParallaxScrollView from '@/components/ParallaxScrollView'

export default function HomeScreen() {
	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
			headerImage={<Image style={styles.reactLogo} />}
		></ParallaxScrollView>
	)
}

const styles = StyleSheet.create({
	reactLogo: {
		bottom: 0,
		height: 178,
		left: 0,
		position: 'absolute',
		width: 290,
	},
})
