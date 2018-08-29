import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import Buttons from './screens/Buttons';
import Checkboxes from './screens/Checkboxes';

const AppNavigator = createDrawerNavigator({
  Buttons: { screen: Buttons },
  CheckBoxes: { screen: Checkboxes },
})

export default AppNavigator;
