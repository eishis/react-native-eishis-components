// @flow
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Badge } from 'react-native-eishis-components';
import withMenuButton from '../utils/withMenuButton';

const BadgeScreen = () => (
  <View style={styles.container}>
    <Badge colorType="red" sizeType="small">	
      <Text>badge</Text>	
    </Badge>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default withMenuButton('Badge', BadgeScreen);
