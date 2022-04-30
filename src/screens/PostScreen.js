import { View, StyleSheet, Text } from 'react-native'
import { THEME } from '../helpers/constants';

const { DANGER_COLOR, LIGHT_COLOR } = THEME

const PostScreen = ({ navigation }) => {
	const postId = navigation.getParam('postId')

	return (
		<View style={styles.center}>
			<Text>{postId}</Text>
		</View>
	)
}

PostScreen.navigationOptions = ({ navigation }) => {
	const date = navigation.getParam('date')
	return {
		headerTitle: `Post from ${ new Date(date).toLocaleDateString() }`,
		headerStyle: {
			backgroundColor: DANGER_COLOR,
		},
		headerTintColor: LIGHT_COLOR
	}
}

const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})


export default PostScreen;

