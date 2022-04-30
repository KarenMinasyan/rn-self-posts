import { Platform } from 'react-native'
import { HeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'
import { THEME } from '../helpers/constants'

const { MAIN_COLOR, LIGHT_COLOR } = THEME

const AppHeaderIcon = (props) => (
	<HeaderButton
		{...props}
		iconSize={24}
		IconComponent={Ionicons}
		color={ Platform.OS === 'android' ? LIGHT_COLOR : MAIN_COLOR }
	/>
)

export default AppHeaderIcon;
