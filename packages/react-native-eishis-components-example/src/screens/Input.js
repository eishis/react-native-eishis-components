// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Input } from 'react-native-eishis-components';
import withMenuButton from '../utils/withMenuButton';

const InputScreen = () => (
  <View style={styles.container}>
    <Input />
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

export default withMenuButton('Input', InputScreen);
