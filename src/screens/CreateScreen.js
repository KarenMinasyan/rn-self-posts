import { useState } from 'react';
import {
	View,
	StyleSheet,
	Text,
	TextInput,
	Image,
	Button,
	ScrollView,
	TouchableWithoutFeedback,
	Keyboard
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';
import AppHeaderIcon from '../components/AppHeaderIcon';
import { addPost } from '../store/actions/post';
import { THEME } from '../helpers/constants';

const {MAIN_COLOR} = THEME
const img = 'https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg'

const CreateScreen = ({ navigation }) => {
	const [text, setText] = useState('');
	const dispatch = useDispatch()

	const saveHandler = () => {
		const post = {
			date: new Date().toJSON(),
			text, //text: text
			img, //img: img
			booked: false
		}

		dispatch(addPost(post))
		navigation.navigate('Main')
	}

	return (
	<ScrollView>
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.wrapper}>
				<Text style={styles.title}>Create New Post</Text>
				<TextInput
					style={styles.textarea}
					placeholder='Enter your notes'
					value={text}
					onChangeText={setText}
					multiline
				/>
				<Image
					style={styles.img}
					source={{uri: img}}
				/>
				<Button
					title='Create post'
					color={MAIN_COLOR}
					onPress={saveHandler}
				/>
			</View>
		</TouchableWithoutFeedback>
	</ScrollView>
	)
}

CreateScreen.navigationOptions = ({ navigation }) => ({
	headerTitle: 'create post',
	headerLeft: () => (
		<HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
			<Item
				title='Toggle Drawer'
				iconName='ios-menu'
				onPress={() => navigation.toggleDrawer()}
			/>
		</HeaderButtons>
	)
})

const styles = StyleSheet.create({
	wrapper: {
		padding: 10
	},
	title: {
		fontSize: 20,
		textAlign: 'center',
		fontFamily: 'open-regular',
		marginVertical: 10
	},
	textarea: {
		padding: 10,
		marginBottom: 10
	},
	img: {
		width: '100%',
		height: 200
	}
})


export default CreateScreen;

