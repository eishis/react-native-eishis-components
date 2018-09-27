import * as React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image, View } from 'react-native';
import { Colors } from '../../../styles';

export default class Checkbox extends React.Component {
  state = {
    isChecked: this.props.isChecked,
  }

  onClick = () => {
    const checkboxState = !this.state.isChecked;
    this.setState({
      isChecked: checkboxState
    });
  }

  renderLeftItem = () => {
    return (
      <Text>{this.props.checkText}</Text>
    )
  }

  renderCenterItem = () => {
    return (
      <Text style={{ flex: 1 }}>{this.props.checkText}</Text>
    )
  }

  render() {
    const {
      container,
      checkIcon,
      checkOffIcon, 
    } = styles;

    return (
      <TouchableOpacity
        onPress={() => this.onClick()}
        style={container}
      >
        {this.state.isChecked &&
          <Image source={require('../../../images/icon-check-on.png')} style={checkIcon} />
        }
        {!this.state.isChecked &&
          <View style={checkOffIcon} />
        }
        {this.render}
        {this.renderLeftItem()}
        {/* {this.renderCenterItem()} */}
      </TouchableOpacity>
    ); 
  }
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  checkIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  checkOffIcon: {
    width: 24,
    height: 24,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#666',
    marginRight: 10,
  }
});
