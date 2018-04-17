/**
 * RemindMe App
 * home Screen
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  View,
  StatusBar
} from 'react-native';
import Colors from './../theme/colors';

export default class HomeScreen extends Component<{}> {

  goToTaskScreen(){
    this.props.navigation.navigate('Tasks');
  }

  goToCategoriesScreen(){
    this.props.navigation.navigate('Categories');
  }

  render() {

    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
       />
        <Image
          style={styles.remindMeLogo}
          source={require('./../images/remindMe-logo.png')}/>
        <TouchableHighlight
          style={styles.homeButton}
          underlayColor={Colors.touchableHover}
          onPress={this.goToCategoriesScreen.bind(this)}>
          <Text style={styles.homeButtonText}>COMENZAR</Text>
        </TouchableHighlight>
        <Image source={require('./../images/avatars.png')} />
      </View>
    );
  }
}

// TODO: Create Theme styles (Buttons, Global Components, etc) so it can be imported on each component as required.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.primaryColorDarker,
  },
  remindMeLogo:{
    marginTop: 80
  },
  homeButton: {
      width: 325,
      height: 55,
      paddingTop: 15,
      borderRadius: 27,
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: '#ffffff'
  },
  homeButtonText: {
    fontFamily: 'Avenir',
    textAlign: 'center',
    fontSize: 17,
    color: 'white'
  }
});
