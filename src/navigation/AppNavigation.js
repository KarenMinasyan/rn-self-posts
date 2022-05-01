import React from 'react'
import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { Ionicons } from '@expo/vector-icons'
import MainScreen from '../screens/MainScreen'
import PostScreen from '../screens/PostScreen'
import BookedScreen from '../screens/BookedScreen'
import AboutScreen from '../screens/AboutScreen'
import CreateScreen from '../screens/CreateScreen';
import { THEME } from '../helpers/constants'

const { MAIN_COLOR, LIGHT_COLOR } = THEME

const navigatorOptions = {
	defaultNavigationOptions: {
		headerStyle: {
			backgroundColor: Platform.OS === 'android' ? MAIN_COLOR : LIGHT_COLOR
		},
		headerTintColor: Platform.OS === 'android' ? LIGHT_COLOR : MAIN_COLOR
	}
}

const PostNavigator = createStackNavigator({
	Main: MainScreen,
	Post: PostScreen
},
	navigatorOptions
)

const BookedNavigator = createStackNavigator({
	Booked: BookedScreen,
	Post: PostScreen
},
	navigatorOptions
)

const bottomTabsConfig = 	{
	Post: {
		screen: PostNavigator,
		navigationOptions: {
			tabBarLabel: 'All',
			tabBarIcon: info => <Ionicons name='ios-albums' size={25} color={info.tintColor} />
		}
	},
	Booked: {
		screen: BookedNavigator,
		navigationOptions: {
			tabBarLabel: 'Favorite',
			tabBarIcon: info => <Ionicons name='ios-star' size={25} color={info.tintColor} />
		}
	}
}

const BottomNavigator =
	Platform.OS === 'android'
		? createMaterialBottomTabNavigator(bottomTabsConfig, {
			activeTintColor: LIGHT_COLOR,
		  shifting: true,
		  barStyle: {
				backgroundColor: MAIN_COLOR
			}
		})
		: createBottomTabNavigator( bottomTabsConfig, {
				tabBarOptions: {
		activeTintColor: MAIN_COLOR
	}
})

const AboutNavigator = createStackNavigator({
	About: AboutScreen
}, navigatorOptions)

const CreateNavigator = createStackNavigator({
	Create: CreateScreen
}, navigatorOptions)

const MainNavigator = createDrawerNavigator({
	 PostTabs: {
		 screen: BottomNavigator,
		 navigationOptions: {
			 drawerLabel: 'Home',
			 drawerIcon: <Ionicons name='home' size={24} color={MAIN_COLOR} />
		 }
	 },
	 About: {
		 screen: AboutNavigator,
		 navigationOptions: {
			 drawerLabel: 'About app',
			 drawerIcon: <Ionicons name="information-circle" size={24} color={MAIN_COLOR} />
		 }
	 },
	Create: {
		 screen: CreateNavigator,
		navigationOptions: {
			drawerLabel: 'New post',
			drawerIcon: <Ionicons name="create" size={24} color={MAIN_COLOR} />
		}
	 }
},
	{
	contentOptions: {
		activeTintColor: MAIN_COLOR,
		labelStyle: {
			fontFamily: 'open-bold'
		}
	}
})

export const AppNavigation = createAppContainer(MainNavigator)
