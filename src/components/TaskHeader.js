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
  View,
  Platform
} from 'react-native';
import Colors from './../theme/colors';
import Typografy from './../theme/typografy';

const screen = Dimensions.get('window');

export default class TaskHeader extends Component<{}> {
  getFormatedDate(){
    //TODO: Move this to a static data folder
    const days = [ 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
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
    const  currentCat  = this.props.currentCategory;

    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.containerBackground}
          source={require('./../images/pattern.png')}>
          { Platform.OS === 'ios' &&
            <TouchableHighlight
              style={ styles.btnBack}
              onPress={this.props.returnToCategories}>
              <Image
                style={styles.btnBackIcon}
                source={require('./../images/back-btn.png')}/>
            </TouchableHighlight>
          }
          <Text style={styles.title}>{currentCat}</Text>
          <Text style={styles.todosText}>{taksToBeCompleted} Pendientes</Text>
          <Text style={styles.dateText}>{this.getFormatedDate()}</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  containerBackground: {
    flex: 1,
    justifyContent: 'center',
    width: screen.width,
    alignItems: 'center'
  },
  todosText:{
    ...Typografy.avenirFont,
    fontSize: 36,
    color: Colors.white
  },
  title: {
    ...Typografy.avenirFont,
    fontSize: 45,
    color: Colors.white
  },
  dateText:{
    ...Typografy.avenirFont,
    fontSize: 16,
    color: Colors.white,
    fontFamily: 'Avenir'
  },
  btnBack:{
    alignSelf: 'flex-start',
    width: 20,
    height: 16,
    marginTop:20,
    marginLeft:20
  },
  btnBackIcon: {
    width: 20,
    height: 16
  }
});
