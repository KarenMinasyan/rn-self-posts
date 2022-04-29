import { View, StyleSheet, Text } from 'react-native'

const BookedScreen = () => {
	return (
		<View style={styles.center}>
			<Text>BookmarkedScreen</Text>
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


export default BookedScreen;
