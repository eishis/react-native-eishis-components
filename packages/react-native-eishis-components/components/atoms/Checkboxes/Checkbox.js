import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, Image, View } from 'react-native';

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
      iconInner,
      path1,
      path2,
    } = styles;

    return (
      <TouchableOpacity
        onPress={() => this.onClick()}
        style={container}
      >
        <View style={checkIcon}>
          {this.state.isChecked && 
            <View style={iconInner}>
              <View style={path1} />
              <View style={path2} />
            </View>
          }
        </View>
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
    borderColor: '#666',
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
    backgroundColor: '#666',
    position: 'absolute',
    top: 0,
    left: 0
  },
  path2: {
    width: 12,
    height: 3,
    backgroundColor: '#666',
    position: 'absolute',
    bottom: 0,
    left: 0,
  }
});
