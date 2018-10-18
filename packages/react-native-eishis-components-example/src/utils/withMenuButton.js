// @flow
import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator, DrawerActions } from 'react-navigation';

export default (routeName, screen) => createStackNavigator({
  [routeName]: {
    screen,
    navigationOptions: ({ navigation }) => ({
      title: routeName,
      headerLeft: (
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Text>Menu</Text>
        </TouchableOpacity>
      ),
    }),
  },
});

const styles = StyleSheet.create({
  menuButton: {
    height: '100%',
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
