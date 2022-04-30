import { View, StyleSheet, Text, Button, FlatList } from 'react-native'
import Post from '../components/Post'
import { DATA } from '../helpers/constants'

const MainScreen = ({ navigation }) => {
	const openPostHandler = post => {
		navigation.navigate('Post', { postId: post.id, date: post.date })
	}

	return (
		<View style={styles.wrapper}>
			<FlatList
				data={DATA}
				keyExtractor={post => post.id.toString()}
				renderItem={({ item }) => <Post post={item} onOpen={openPostHandler} />}
			/>
		</View>
	)
}

MainScreen.navigationOptions = {
	headerTitle: 'my blog'
}

const styles = StyleSheet.create({
	wrapper: {
		padding: 10
	}
})


export default MainScreen;
