import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Colors } from '../../styles';

interface Props {
  onPress?: () => void;
  style?: any;
  type?: 'blue' | 'yellow' | 'green' | 'red';
  disabled?: boolean;
  isOutline?: boolean;
}

const Button: React.SFC<Props> = props => {
  const {
    onPress,
    children,
    style,
    type = 'blue',
    disabled,
    isOutline,
  } = props;

  const { buttonBaseStyle, textStyle, outlineButtonStyle } = styles;

  // 色
  const buttonColor = buttonColors[type];
  const selectedButtonColor = disabled
    ? buttonColor.disabled
    : buttonColor.button;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        buttonBaseStyle,
        isOutline && outlineButtonStyle,
        { borderColor: isOutline && selectedButtonColor },
        { backgroundColor: isOutline ? Colors.white : selectedButtonColor },
        style,
      ]}
      disabled={disabled}
    >
      <Text
        style={[
          textStyle,
          { color: isOutline ? selectedButtonColor : Colors.white },
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

interface ButtonColors {
  [key: string]: {
    button: string;
    disabled: string;
  };
}

const buttonColors: ButtonColors = {
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
