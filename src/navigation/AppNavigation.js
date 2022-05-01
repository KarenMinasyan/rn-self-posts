import React from 'react'
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import MainScreen from '../screens/MainScreen'
import PostScreen from '../screens/PostScreen'
import BookedScreen from '../screens/BookedScreen'
import { THEME } from '../helpers/constants'

const { MAIN_COLOR, LIGHT_COLOR } = THEME

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

const BookedNavigator = createStackNavigator({
	Booked: BookedScreen,
	Post: PostScreen
},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: Platform.OS === 'android' ? MAIN_COLOR : LIGHT_COLOR
			},
			headerTintColor: Platform.OS === 'android' ? LIGHT_COLOR : MAIN_COLOR
		}
	}
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

export const AppNavigation = createAppContainer(BottomNavigator)
