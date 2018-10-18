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
    <Badge colorType="red" sizeType="medium" badgeText="test">	
      <Text>badge</Text>	
    </Badge>
    <View style={{ height: 20 }} />
    <Badge colorType="yellow" sizeType="medium" badgeText="1">	
      <Text>badge</Text>	
    </Badge>
    <View style={{ height: 20 }} />
    <Badge colorType="gray" sizeType="medium" badgeText="11">	
      <Text>badge</Text>	
    </Badge>
    <View style={{ height: 20 }} />
    <Badge colorType="blue" sizeType="medium" badgeText="111">	
      <Text>badge</Text>	
    </Badge>
    <View style={{ height: 20 }} />
    <Badge colorType="red" sizeType="medium">	
      <Text>badge medium</Text>	
    </Badge>
    <View style={{ height: 20 }} />
    <Badge colorType="red" sizeType="small">	
      <Text>badge small</Text>	
    </Badge>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  badgeContainer: {
    marginBottom: 10,
  }
});

export default withMenuButton('Badge', BadgeScreen);
