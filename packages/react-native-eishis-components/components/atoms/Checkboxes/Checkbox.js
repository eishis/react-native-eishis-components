import React, { Component } from 'react';
import { TouchableWithoutFeedback, StyleSheet, Text, Image, View } from 'react-native';
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
      checkOffIcon, 
    } = styles;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.onClick()}
        style={container}
      >
        {this.state.isChecked &&
          <Image source={require('../../../images/check_on.png')} style={checkIcon} />
        }
        {!this.state.isChecked &&
          <Image source={require('../../../images/check_off.png')} style={checkIcon} />
        }
        
        {/* {this.render} */}
        {this.renderLeftItem()}
        {/* {this.renderCenterItem()} */}
      </TouchableWithoutFeedback>
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
  },
  checkOffIcon: {
    width: 24,
    height: 24,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#666',
    marginRight: 10,
  }
});
