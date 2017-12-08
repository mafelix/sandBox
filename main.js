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

var Home = require('./src/components/home.js');
var Gestures = require('./src/components/gestures.js');
var AnimationSandbox = require('./src/components/animationSandbox.js');
var PanRespond = require('./src/components/panRespond.js');
// import Home from './src/components/home.js';
// import Gestures from './src/components/gestures.js';

const GesturesStack = StackNavigator({
  gestures: {screen: Gestures},
  pan: {screen: PanRespond},
});

const RootRoutes = StackNavigator({
  Home: {screen: Home},
  Gestures: {screen: GesturesStack, initialRouteName: 'gestures'},
  Animate: {screen: AnimationSandbox}
});

// const TabRoutes = TabNavigator({

// })

class Main extends Component {
  render() {
    console.log(RootRoutes)
    return (
      <RootRoutes/>
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
