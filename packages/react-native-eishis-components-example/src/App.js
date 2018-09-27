import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import Buttons from './screens/Buttons';
import Checkboxes from './screens/Checkboxes';

const ButtonsStack = createStackNavigator({
  Buttons: {
    screen: Buttons,
    navigationOptions: ({ navigation }) =>({
      title: 'Buttons',
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
          <Text>Menu</Text>
        </TouchableOpacity>
      ),
    }),
  },
});

const CheckBoxesStack = createStackNavigator({
  Checkboxes: { screen: Checkboxes },
});

const AppNavigator = createDrawerNavigator({
  ButtonsStack: { screen: ButtonsStack },
  CheckBoxesStack: { screen: CheckBoxesStack },
})

export default AppNavigator;
