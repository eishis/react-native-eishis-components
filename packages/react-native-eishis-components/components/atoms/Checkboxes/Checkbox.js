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
      checkOffIcon, 
      iconInner,
      path1,
      path2,
    } = styles;

    const checkImage = this.state.isChecked ? require('../../../images/check_on.png') : require('../../../images/check_off.png');

    return (
      <TouchableOpacity
        onPress={() => this.onClick()}
        style={container}
      >
        {this.state.isChecked &&
          <View style={checkIcon}>
            <View style={iconInner}>
              <View style={path1} />
              <View style={path2} />
            </View>
          </View>
        }
        {!this.state.isChecked &&
          <View style={checkOffIcon}></View>
        }
        {this.renderLeftItem()}
      </TouchableOpacity>
    ); 
  }
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 16,
    marginTop: 16,
  },
  checkIcon: {
    width: 24,
    height: 24,
    marginRight: 16,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#f00',
    backgroundColor: '#f00',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkOffIcon: {
    width: 24,
    height: 24,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#666',
    marginRight: 16,
  },
  iconInner: {
    width: 12,
    height: 8,
    position: 'relative',
    transform: [{ rotate: '-45deg'}],
    marginTop: -2,
  },
  path1: {
    width: 3,
    height: 8,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 0,
    left: 0
  },
  path2: {
    width: 12,
    height: 3,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
  }
});
