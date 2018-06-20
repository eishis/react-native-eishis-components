import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Colors } from '../../../styles';

const Button = (props) => {
  const buttonType = props.type || 'blue';
  const { buttonStyle, textStyle } = styles;
  const buttonColor = buttonColors[buttonType];
  const {
    onPress,
    children,
    style,
    type,
    disabled,
  } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[buttonStyle, { backgroundColor: disabled ? buttonColor.disabled : buttonColor.button }, style]}
      disabled={disabled}
    >
      <Text style={[textStyle, { color: buttonColor.text }]} >{children}</Text>
    </TouchableOpacity>
  ); 
};

const buttonColors = {
  blue: {
    button: Colors.blue,
    disabled: `${Colors.blue}50`,
    text: Colors.white,
  },
  yellow: {
    button: Colors.yellow,
    disabled: `${Colors.yellow}50`,
    text: Colors.white,
  },
  gray: {
    button: Colors.gray,
    disabled: `${Colors.gray}50`,
    text: Colors.black,
  },
  red: {
    button: Colors.red,
    disabled: `${Colors.red}50`,
    text: Colors.white,
  },
};

const styles = StyleSheet.create({
  buttonStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 12,
    width: 240,
    height: 40,
    borderRadius: 80,
  },
  textStyle: {
    fontSize: 15,
    textAlign: 'center',
    fontFamily: "HiraKakuProN-W6",
  },
});

export default Button;
