import { createDrawerNavigator } from 'react-navigation';
import ButtonScreen from './src/screens/Button';
import CheckboxScreen from './src/screens/Checkbox';
import BadgeScreen from './src/screens/Badge';
import InputScreen from './src/screens/Input';

const AppNavigator = createDrawerNavigator({
  Button: { screen: ButtonScreen },
  Checkbox: { screen: CheckboxScreen },
  Badge: { screen: BadgeScreen },
  Input: { screen: InputScreen },
})

export default AppNavigator;
