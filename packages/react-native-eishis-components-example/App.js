/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Button } from 'react-native-eishis-components';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Button style={{ marginBottom: 6 }}>test</Button>
        <Button isOutline style={{ marginBottom: 6 }}>test</Button>
        <Button type="yellow" style={{ marginBottom: 6 }}>test</Button>
        <Button type="yellow" isOutline style={{ marginBottom: 6 }}>test</Button>
        <Button type="gray" style={{ marginBottom: 6 }}>test</Button>
        <Button type="gray" isOutline style={{ marginBottom: 6 }}>test</Button>
        <Button type="red" style={{ marginBottom: 6 }}>test</Button>
        <Button type="red" isOutline>test</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
