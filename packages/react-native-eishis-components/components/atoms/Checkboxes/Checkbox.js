import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Colors } from '../../../styles';

export default class Checkbox extends Component {
  state = {
    isChecked: this.props.isChecked,
  }

  renderLeftItem = () => {
    return (
      <Text>{this.props.checkText}</Text>
    )
  }

  renderCenterItem = () => {
    return (
      <Text>{this.props.checkText}</Text>
    )
  }

  render() {
    return (
      <View>
        {this.renderLeftItem()}
        {this.renderCenterItem()}
        {this.renderRightItem()}
      </View>
    ); 
  }
};

