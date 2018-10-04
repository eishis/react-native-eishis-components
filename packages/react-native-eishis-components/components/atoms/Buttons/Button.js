import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Colors } from '../../../styles';

const Button = (props) => {
  const {
    onPress,
    children,
    style,
    type,
    disabled,
    isOutline,
  } = props;

  const buttonType = props.type || 'blue';
  const { buttonBaseStyle, textStyle, outlineButtonStyle } = styles;

  // 色
  const selectedButtonColor = disabled ? buttonColors[buttonType].disabled : buttonColors[buttonType].button;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        buttonBaseStyle,
        (isOutline && outlineButtonStyle),
        { borderColor: (isOutline && selectedButtonColor) },
        { backgroundColor: (isOutline ? Colors.white : selectedButtonColor) },
        style,
      ]}
      disabled={disabled}
    >
      <Text style={[textStyle, { color: (isOutline ? selectedButtonColor : Colors.white) }]} >{children}</Text>
    </TouchableOpacity>
  ); 
};

const buttonColors = {
  blue: {
    button: Colors.blue,
    disabled: `${Colors.blue}50`,
  },
  yellow: {
    button: Colors.yellow,
    disabled: `${Colors.yellow}50`,
  },
  gray: {
    button: Colors.gray,
    disabled: `${Colors.gray}50`,
  },
  red: {
    button: Colors.red,
    disabled: `${Colors.red}50`,
  },
};

const styles = StyleSheet.create({
  buttonBaseStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
    width: 240,
    height: 40,
    borderRadius: 80,
  },
  textStyle: {
    fontSize: 15,
    textAlign: 'center',
  },
  outlineButtonStyle: {
    borderWidth: 2,
  },
});

export default Button;
