import { View, StyleSheet, Text } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import AppHeaderIcon from '../components/AppHeaderIcon';

const AboutScreen = () => {
	return (
		<View style={styles.center}>
			<Text>This is the best app for personal notes</Text>
			<Text>Version <Text style={styles.version}>1.0.0</Text></Text>
		</View>
	)
}

AboutScreen.navigationOptions = ({ navigation }) => ({
	headerTitle: 'about app',
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
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	version: {
		fontFamily: 'open-bold'
	}
})

export default AboutScreen;
