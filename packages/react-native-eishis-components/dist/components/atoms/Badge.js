import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../../styles';
const Badge = props => {
    const { colorType = 'blue', sizeType = 'medium', style } = props;
    return (<View>
      <View style={[
        styles.badgeStyle,
        badgeColors[colorType],
        badgeSizes[sizeType],
        style,
    ]}/>
      {props.children}
    </View>);
};
const badgeColors = {
    blue: {
        backgroundColor: Colors.blue,
    },
    yellow: {
        backgroundColor: Colors.yellow,
    },
    gray: {
        backgroundColor: Colors.gray,
    },
    red: {
        backgroundColor: Colors.red,
    },
};
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
};
const styles = StyleSheet.create({
    buttonBaseStyle: {
        position: 'relative',
    },
    badgeStyle: {
        position: 'absolute',
    },
});
export default Badge;