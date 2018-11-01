import { createDrawerNavigator } from 'react-navigation';
import ButtonScreen from './screens/Button';
import CheckboxScreen from './screens/Checkbox';
import BadgeScreen from './screens/Badge';
import InputScreen from './screens/Input';

const AppNavigator = createDrawerNavigator({
  Button: { screen: ButtonScreen },
  Checkbox: { screen: CheckboxScreen },
  Badge: { screen: BadgeScreen },
  Input: { screen: InputScreen },
})

export default AppNavigator;
