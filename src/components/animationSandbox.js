import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class AnimationSandbox extends Component {
  static navigationOptions = {
    title: 'AnimationSandbox'
  }

  render() {
    return (
      <View>
        <Text>Animation</Text>
      </View>
    )
  }
}
module.exports = AnimationSandbox;