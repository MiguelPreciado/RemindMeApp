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
  StatusBar,
  ImageBackground
} from 'react-native';
import Colors from './../theme/colors';

export default class HomeScreen extends Component<{}> {
  goToTaskScreen(){
    this.props.navigation.navigate('Tasks');
  }

  render() {
    return (
      <View style={styles.container}>
      <ImageBackground style={styles.backgroundImage} source={require('./../images/pattern.png')}>
        <StatusBar
          barStyle="light-content"
       />
        <Image
          style={styles.remindMeLogo}
          source={require('./../images/remindMe-logo.png')}/>
        <TouchableHighlight
          style={styles.homeButton}
          underlayColor={Colors.touchableHover}
          onPress={this.goToTaskScreen.bind(this)}>
          <Text style={styles.homeButtonText}>COMENZAR</Text>
        </TouchableHighlight>
        <Image style = {styles.avatars}source={require('./../images/avatars.png')} />
</ImageBackground>
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
  backgroundImage:{
    flex: 1,
    alignItems: 'center'
  },
  homeButton: {
      width: 325,
      height: 55,
      paddingTop: 15,
      borderRadius: 27,
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: '#ffffff',
      backgroundColor: Colors.primaryColorDarker,
      marginTop: 80
  },
  homeButtonText: {
    fontFamily: 'Avenir',
    textAlign: 'center',
    fontSize: 17,
    color: 'white'
  },
  avatars: {
    marginTop: 73
  }
});
