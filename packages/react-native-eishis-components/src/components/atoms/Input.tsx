import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface Props {
  label: string;
}

const Input: React.SFC<Props> = props => {
  const { label, ...rest } = props;

  return (
    <View style={styles.inner}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...rest} />
    </View>
  );
};

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
  },
});

export default Input;
