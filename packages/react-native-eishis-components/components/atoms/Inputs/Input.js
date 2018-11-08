import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, Image, View, TextInput } from 'react-native';

const styles = StyleSheet.create({
  inner: {
    width: '100%',
    padding: 16,
  },
  label: {
    paddingBottom: 8,
  },
  input: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#eeeeee',
  }
});

class Input extends Component {

  render(){

    const {
      inner,
      label,
      input,
    } = styles;

    return(
      <View style={inner}>
        <Text style={label}>{this.props.label}</Text>
        <TextInput style={input}></TextInput>
      </View>
    );
  }

}

export default Input;