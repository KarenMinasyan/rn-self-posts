import {
	View,
	StyleSheet,
	Text,
	Image,
	Button,
	ScrollView,
	Alert
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import AppHeaderIcon from '../components/AppHeaderIcon'
import { THEME, DATA } from '../helpers/constants'

const { DANGER_COLOR, LIGHT_COLOR } = THEME

const PostScreen = ({ navigation }) => {
	const postId = navigation.getParam('postId')

	const post = DATA.find(p => p.id === postId)

	const removeHandler = () => {
		Alert.alert(
			'Delete post',
			'Are you sure delete post?',
			[
				{
					text: 'Cancel',
					style: 'cancel'
				},
				{ text: 'Delete', style: 'destructive', onPress: () => {} }
			],
			{cancelable: false},
		);
	}

	return (
		<ScrollView>
			<Image source={{uri: post.img}} style={styles.image} />
			<View style={styles.textWrap}>
				<Text style={styles.title}>{post.text}</Text>
			</View>
			<Button
				title='Delete'
				color={DANGER_COLOR}
				onPress={removeHandler}
			/>
		</ScrollView>
	)
}

PostScreen.navigationOptions = ({ navigation }) => {
	const date = navigation.getParam('date')
	const booked = navigation.getParam('booked')
	const iconName = booked ? 'ios-star' : 'ios-star-outline'
	return {
		headerTitle: `Post from ${ new Date(date).toLocaleDateString() }`,
		headerStyle: {
			backgroundColor: DANGER_COLOR,
		},
		headerTintColor: LIGHT_COLOR,
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
				<Item
					title='Take photo'
					iconName={iconName}
					onPress={() => console.log('press photo')}
				/>
			</HeaderButtons>
		),
	}
}

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 200
	},
	textWrap: {
		padding: 10
	},
	title: {
		fontFamily: 'open-regular'
	}
})


export default PostScreen;

