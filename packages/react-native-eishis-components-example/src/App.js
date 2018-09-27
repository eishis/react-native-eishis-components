import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import {
  createDrawerNavigator,
  createStackNavigator,
  DrawerActions,
} from 'react-navigation';
import Buttons from './screens/Buttons';
import Checkboxes from './screens/Checkboxes';

const ButtonsStack = createStackNavigator({
  Buttons: {
    screen: Buttons,
    navigationOptions: ({ navigation }) => ({
      title: 'Buttons',
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Text>Menu</Text>
        </TouchableOpacity>
      ),
    }),
  },
});

const CheckboxesStack = createStackNavigator({
  Checkboxes: {
    screen: Checkboxes,
    navigationOptions: ({ navigation }) => ({
      title: 'Checkboxes',
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Text>Menu</Text>
        </TouchableOpacity>
      ),
    }),
  },
});

const AppNavigator = createDrawerNavigator({
  Buttons: { screen: ButtonsStack },
  Checkbox: { screen: CheckboxesStack },
})

export default AppNavigator;
