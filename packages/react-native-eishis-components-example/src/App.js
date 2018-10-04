import { createDrawerNavigator } from 'react-navigation';
import ButtonsScreen from './screens/Buttons';
import CheckboxesScreen from './screens/Checkboxes';

const AppNavigator = createDrawerNavigator({
  Button: { screen: ButtonsScreen },
  Checkbox: { screen: CheckboxesScreen },
})

export default AppNavigator;
