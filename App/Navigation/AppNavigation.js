import { StackNavigator } from 'react-navigation'
import ProfileScreen from '../Containers/Profile/Profile.Screen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  ProfileScreen: { screen: ProfileScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'ProfileScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
