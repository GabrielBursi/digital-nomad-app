import { StyleSheet, Text } from 'react-native'

import { Link, Stack } from 'expo-router'

import { ThemedView } from '@/components/ThemedView'

export default function NotFoundScreen() {
	return (
		<>
			<Stack.Screen options={{ title: 'Oops!' }} />
			<ThemedView style={styles.container}>
				<Text>This screen does not exist.</Text>
				<Link href="/" style={styles.link}>
					<Text>Go to home screen!</Text>
				</Link>
			</ThemedView>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
		padding: 20,
	},
	link: {
		marginTop: 15,
		paddingVertical: 15,
	},
})
