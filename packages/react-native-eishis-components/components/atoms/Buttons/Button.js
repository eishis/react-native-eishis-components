import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

// type Props = {
//   style: any,
//   children: Object,
//   onPress: () => void,
// }

const Button = (props) => {
  // const {
  //   style,
  //   onPress,
  // } = props;
  const { children } = props;
  return (
    <TouchableOpacity
      style={styles.button}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    borderStyle: 'solid',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  text: {
    color: '#333',
    fontSize: 11,
  },
});

