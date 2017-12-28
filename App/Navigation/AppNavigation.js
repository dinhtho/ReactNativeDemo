import { StackNavigator } from 'react-navigation'
import LoginScreen from '../Containers/Login/Login.Screen'
import ListItemScreen from '../Containers/ListItem/ListItem.Screen'
import DialogScreen from '../Containers/Dialog/Dialog.Screen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LoginScreen: { screen: LoginScreen },
  ListItemScreen: { screen: ListItemScreen },
  DialogScreen: { screen: DialogScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'ListItemScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
