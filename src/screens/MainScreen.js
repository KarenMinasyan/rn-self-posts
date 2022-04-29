import { View, StyleSheet, Text } from 'react-native'

const MainScreen = () => {
	return (
		<View style={styles.center}>
			<Text>Main screen</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})


export default MainScreen;