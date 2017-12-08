import React, { Component } from 'react';
import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  LayoutAnimation,
  ListView,
} from 'react-native';

class Home extends Component {

  static navigationOptions = {
    title: 'Home'
  }

   render() {
    console.log(this.props);
    return (
      <View style={styles.mainContainer}>
        <TouchableHighlight
          onPress={() => {
            this.props.navigation.navigate('Gestures')
          }}
        >
          <Text>Gestures</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            this.props.navigation.navigate('Animate')
          }}
        >
          <Text>Animations</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
module.exports = Home;