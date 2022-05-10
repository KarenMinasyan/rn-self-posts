import { useCallback, useEffect } from 'react';
import {
	View,
	StyleSheet,
	Text,
	Image,
	Button,
	ScrollView,
	Alert
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import AppHeaderIcon from '../components/AppHeaderIcon'
import { THEME } from '../helpers/constants'
import { removePost, toggleBooked } from '../store/actions/post';

const { DANGER_COLOR, LIGHT_COLOR } = THEME

const PostScreen = ({ navigation }) => {
	const postId = navigation.getParam('postId')
	const dispatch = useDispatch()
	const booked = useSelector(state => state.post.bookedPosts.some(post => post.id === postId))
	const post = useSelector(state => state.post.allPosts.find(p => p.id === postId))

	useEffect(() => {
		navigation.setParams({ toggleHandler })
	}, []);

	useEffect(() => {
		navigation.setParams({ booked })
	}, [booked]);

	const toggleHandler = useCallback( () => {
		dispatch(toggleBooked(postId))
	}, [dispatch, postId]);

	const removeHandler = () => {
		Alert.alert(
			'Delete post',
			'Are you sure delete post?',
			[
				{
					text: 'Cancel',
					style: 'cancel'
				},
				{
					text: 'Delete',
					style: 'destructive',
					onPress: () => {
					 navigation.navigate('Main')
				   dispatch(removePost(postId))
				  }
				}
			],
			{cancelable: false},
		);
	}

	return (
		post ? (<ScrollView>
			<Image source={{uri: post.img}} style={styles.image} />
			<View style={styles.textWrap}>
				<Text style={styles.title}>{post.text}</Text>
			</View>
			<Button
				title='Delete'
				color={DANGER_COLOR}
				onPress={removeHandler}
			/>
		</ScrollView>) : null
	)
}

PostScreen.navigationOptions = ({ navigation }) => {
	const date = navigation.getParam('date')
	const booked = navigation.getParam('booked')
	const toggleHandler = navigation.getParam('toggleHandler')
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
					onPress={toggleHandler}
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

