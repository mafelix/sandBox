import React, { Component } from 'react';
import {
  StackNavigator,
  // TabNavigator,
} from 'react-navigation';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  LayoutAnimation,
  ListView,
} from 'react-native';

var Home = require('./src/components/home.js');
var Gestures = require('./src/components/gestures.js');
// import Home from './src/components/home.js';
// import Gestures from './src/components/gestures.js';

const AppRoutes = StackNavigator({
  Home: {screen: Home},
  Gestures: {screen: Gestures}
});

class Main extends Component {
  // return (
    // <StackNavigator
    //   initialRoute={AppRoutes.Home}
    // />
  // )
  render() {
    console.log(AppRoutes)
    return (
      <AppRoutes/>
    )
  }
}

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

module.exports = Main;
