import {useState} from 'react';
import { Provider } from 'react-redux'
import AppLoading from 'expo-app-loading';
import {bootstrap} from './src/bootstrap';
import { AppNavigation } from './src/navigation/AppNavigation';
import store from './src/store'

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
   <Provider store={store}>
		 <AppNavigation />
	 </Provider>
  )
}

export default App;
