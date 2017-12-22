import { StackNavigator } from 'react-navigation'
import LoginScreen from '../Containers/Login/LoginScreen'
import ListItemScreen from '../Containers/ListItemScreen/ListItemScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LoginScreen: { screen: LoginScreen },
  ListItemScreen: { screen: ListItemScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LoginScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
