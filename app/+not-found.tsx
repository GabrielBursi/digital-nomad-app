import { StyleSheet, Text } from 'react-native'

import { Link, Stack } from 'expo-router'

export default function NotFoundScreen() {
	return (
		<>
			<Stack.Screen options={{ title: 'Oops!' }} />
			<Text>This screen does not exist.</Text>
			<Link href="/" style={styles.link}>
				<Text>Go to home screen!</Text>
			</Link>
		</>
	)
}

const styles = StyleSheet.create({
	link: {
		marginTop: 15,
		paddingVertical: 15,
	},
})
