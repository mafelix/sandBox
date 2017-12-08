import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  PanResponder,
} from 'react-native';

class PanRespond extends Component {
  static navigationOptions = {
    title: 'Nested PanRespond'
  }
  render() {
    return (
      <View>
        <Text>PanRespond</Text>
      </View>
    )
  }
}

module.exports = PanRespond;