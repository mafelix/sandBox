import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

class GestureScreen extends Component {
  static navigationOptions = {
    title: 'Gestures',
  }

  render() {
    return(
      <View>
        <Text>Gestures</Text>
      </View>
    )
  }
}
module.exports = GestureScreen;