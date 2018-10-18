import { createDrawerNavigator } from 'react-navigation';
import ButtonScreen from './screens/Button';
import CheckboxScreen from './screens/Checkbox';
import BadgeScreen from './screens/Badge';

const AppNavigator = createDrawerNavigator({
  Button: { screen: ButtonScreen },
  Checkbox: { screen: CheckboxScreen },
  Badge: { screen: BadgeScreen },
})

export default AppNavigator;
