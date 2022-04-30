import {View, StyleSheet, Text, Button} from 'react-native'

const MainScreen = ({navigation}) => {
	const goToPost = () => {
		navigation.navigate('Post')
	}

	return (
		<View style={styles.center}>
			<Text>Main screen</Text>
			<Button title='Go to post' onPress={goToPost} />
		</View>
	)
}

MainScreen.navigationOptions = {
	headerTitle: 'my blog'
}

const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})


export default MainScreen;
