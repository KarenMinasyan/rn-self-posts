import { Text, View } from 'react-native';
import {useState} from "react";
import AppLoading from 'expo-app-loading';
import {bootstrap} from "./src/bootstrap";
import {AppNavigation} from "./src/navigation/AppNavigation";

const App = () => {
	const [isReady, setIsReady] = useState(false)

	const isReadyHandler = () => {
		setIsReady(true)
	}

	if(!isReady) {
		return (
			<AppLoading
				startAsync={bootstrap}
				onFinish={isReadyHandler}
				onError={err => console.log(err)}
			/>
		)
	}
  return (
    <AppNavigation />
  )
}

export default App;
