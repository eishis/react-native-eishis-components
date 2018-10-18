// @flow
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Checkbox } from 'react-native-eishis-components';
import withMenuButton from '../utils/withMenuButton';

type State = {
  checkbox2: boolean,
  checkbox3: boolean,
};

class CheckboxScreen extends Component<{}, State> {
  state = {
    checkbox2: false,
    checkbox3: true,
  }

  render() {
    const {
      checkbox2,
      checkbox3
    } = this.state;

    return (
      <View style={styles.container}>
        <Checkbox label="Dumb checkbox" />
        <Checkbox
          onChange={(checked) => this.setState({ checkbox2: checked })}
          label="Checkbox with event"
        />
        <Text>{checkbox2 ? 'on' : 'off'}</Text>
        <Checkbox
          checked={checkbox3}
          onChange={(checked) => this.setState({ checkbox3: checked })}
          label={'Controlled checkbox'}
        />
        <Text>{checkbox3 ? 'on' : 'off'}</Text>
        <TouchableOpacity
          onPress={() => this.setState({ checkbox3: false })}
        >
          <Text>clear</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default withMenuButton('Checkbox', CheckboxScreen);
