import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import AppHeaderIcon from '../components/AppHeaderIcon'
import PostList from '../components/PostList';
import { DATA } from '../helpers/constants'

const BookedScreen = ({ navigation }) => {
	const openPostHandler = post => {
		navigation.navigate('Post', {
			postId: post.id,
			date: post.date,
			booked: post.booked,
		})
	}

	const filteredData = DATA.filter(post => post.booked)

	return (
		<PostList data={filteredData} onOpen={openPostHandler} />
	)
}

BookedScreen.navigationOptions = {
	headerTitle: 'favorite',
	headerLeft: () => (
		<HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
			<Item
				title='Toggle Drawer'
				iconName='ios-menu'
				onPress={() => console.log('press photo')}
			/>
		</HeaderButtons>
	)
}

export default BookedScreen;
