import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import MainScreen from "../screens/MainScreen";
import PostScreen from "../screens/PostScreen";
import {THEME} from "../helpers/constants";
import {Platform} from "react-native";

const {MAIN_COLOR, LIGHT_COLOR} = THEME

const PostNavigator = createStackNavigator({
	Main: MainScreen,
	Post: {
		screen: PostScreen
	}
}, {
	initialRouteName: 'Main',
	defaultNavigationOptions: {
		headerStyle: {
			backgroundColor: Platform.OS === 'android' ? MAIN_COLOR : LIGHT_COLOR
		},
		headerTintColor: Platform.OS === 'android' ? LIGHT_COLOR : MAIN_COLOR
	}
})

export const AppNavigation = createAppContainer(PostNavigator)
