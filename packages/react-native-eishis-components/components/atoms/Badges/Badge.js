// @flow
import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../styles';

type Props = {
  colorType?: 'blue' | 'yellow' | 'gray' | 'red',
  sizeType?: 'small' | 'medium',
}

const Badge = (props: Props) => {
  const {
    colorType,
    sizeType,
    style,
  } = props;

  return (
    <View style={styles.containerStyle}>
      <View style={[
        styles.badgeStyle,
        badgeColors[colorType] || badgeColors['blue'],
        badgeSizes[sizeType] || badgeSizes['medium'],
        style
      ]}></View>
      {props.children}
    </View>
  ); 
};

const badgeColors = {
  blue: {
    backgroundColor: Colors.blue,
  },
  yellow: {
    backgroundColor: Colors.yellow,
  },
  gray: {
    butbackgroundColorton: Colors.gray,
  },
  red: {
    backgroundColor: Colors.red,
  },
}

const badgeSizes = {
  small: {
    width: 10,
    height: 10,
    borderRadius: 5,
    top: 0,
    right: -2,
  },
  medium: {
    width: 20,
    height: 20,
    borderRadius: 10,
    top: -6,
    right: -8,
  },
}

const styles = StyleSheet.create({
  buttonBaseStyle: {
    position: 'relative',
  },
  badgeStyle: {
    position: 'absolute',
  }
});

export default Badge;
