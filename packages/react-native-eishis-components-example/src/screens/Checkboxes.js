// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Checkbox } from 'react-native-eishis-components';
import withMenuButton from '../utils/withMenuButton';

const CheckboxesScreen = () => (
  <View style={styles.container}>
    <Checkbox checkText="checkbox test" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default withMenuButton('Checkbox', CheckboxesScreen);
