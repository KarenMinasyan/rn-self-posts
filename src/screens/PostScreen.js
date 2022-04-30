import { View, StyleSheet, Text } from 'react-native'
import {THEME} from "../helpers/constants";

const {DANGER_COLOR, LIGHT_COLOR} = THEME

const PostScreen = () => {
	return (
		<View style={styles.center}>
			<Text>PostScreen</Text>
		</View>
	)
}

PostScreen.navigationOptions = {
	headerTitle: 'Post number 42',
	headerStyle: {
		backgroundColor: DANGER_COLOR,
	},
	headerTintColor: LIGHT_COLOR
}

const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})


export default PostScreen;

