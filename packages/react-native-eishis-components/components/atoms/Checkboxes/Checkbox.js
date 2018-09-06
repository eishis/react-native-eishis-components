import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, Image, View } from 'react-native';
import { Colors } from '../../../styles';

export default class Checkbox extends Component {
  state = {
    isChecked: this.props.isChecked,
  }

  onClick = () => {
    const checkboxState = !this.state.isChecked;
    this.setState({
      isChecked: checkboxState
    });
  }

  renderLeftItem = () => {
    return (
      <Text>{this.props.checkText}</Text>
    )
  }

  renderCenterItem = () => {
    return (
      <Text style={{ flex: 1 }}>{this.props.checkText}</Text>
    )
  }

  render() {
    const {
      container,
      checkIcon,
    } = styles;

    const checkImage = this.state.isChecked ? require('../../../images/check_on.png') : require('../../../images/check_off.png');

    return (
      <TouchableOpacity
        onPress={() => this.onClick()}
        style={container}
      >
        <Image source={checkImage} style={checkIcon} />
        {this.renderLeftItem()}
      </TouchableOpacity>
    ); 
  }
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  checkIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  }
});
