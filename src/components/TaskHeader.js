/**
 * RemindMe App
 * TasksScreen
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  Dimensions,
  ImageBackground,
  View
} from 'react-native';
import Colors from './../theme/colors';

const screen = Dimensions.get('window');


export default class TaskHeader extends Component<{}> {

  getDate(){
    //TODO: Move this to a static data folder
    const days = [ 'Lunes', 'Martes', 'Miércoles', 'Sábado', 'Domingo'];
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const currentTime = new Date(),
          month = months[currentTime.getMonth()],
          day = days[currentTime.getDay()],
          date = currentTime.getDate(),
          year = currentTime.getFullYear();

    return `${day} ${date} de ${month} de ${year}`.toUpperCase();
  }

  render() {

    const { taksToBeCompleted } = this.props;


    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.containerBackground}
          source={require('./../images/tasks-bg.jpg')}>
          <Image
            style={styles.avatar}
            source={require('./../images/user-avatar.jpg')}/>
          <Text style={styles.todosText}>{taksToBeCompleted} Pendientes</Text>
          <Text style={styles.dateText}>{this.getDate()}</Text>
        </ImageBackground>
      </View>
    );
  }
}

// TODO: Create Theme styles (Buttons, Global Components, etc) so it can be imported on each component as required.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screen.width,
    height: 399,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  containerBackground: {
    flex: 1,
    justifyContent: 'center',
    width: screen.width,
    height: 399,
    alignItems: 'center'
  },
  avatar:{
    width: 130,
    height: 130,
    borderRadius: 65
  },
  todosText:{
    fontSize: 36,
    color: Colors.white,
    fontFamily: 'Avenir'
  },
  dateText:{
    fontSize: 16,
    color: Colors.gray,
    fontFamily: 'Avenir'
  }
});