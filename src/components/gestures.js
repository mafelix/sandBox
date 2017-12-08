import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableHighlight
} from 'react-native';

class GestureScreen extends Component {
  static navigationOptions = {
    title: 'Gestures',
  }

  render() {

    return(
      <View style={styles.mainContainer}>
        <View ref={'left'} style={styles.row}>
          <TouchableHighlight onPress={() => {
              this.props.navigation.navigate('pan')}
          }>
              <Text>PanRespond</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.row}>
          <Text>Gestures</Text>
        </View>
        <View style={styles.row}>
          <Text>Gestures</Text>
        </View>
      </View>
    )
  }
}
module.exports = GestureScreen;

var styles = {
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
  },
  row: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    minWidth: Dimensions.get('window').width,
  }
}