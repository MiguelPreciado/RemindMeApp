/**
 * RemindMe App
 * Task Component
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  Dimensions,
  View
} from 'react-native';
import Colors from './../theme/colors';
import Typografy from './../theme/typografy';

const screen = Dimensions.get('window');

export default class Task extends Component<{}> {
  constructor(props){
    super(props);
  }

  formatMonth(date){
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const targetDate = new Date(date),
    month = months[targetDate.getMonth()];
    return month;
  }

  formatDay(date){
    const targetDate = new Date(date),
    day = targetDate.getDate();
    return day;
  }

  render() {
    const { id, title, date } = this.props;
    let { completed } = this.props;

    return (
        <TouchableHighlight
            style={styles.touchableArea}
            underlayColor={Colors.touchableHover}
            onPress={ () => { this.props.toggleTask(id) } }>
          <View style={styles.container}>
            <View style={completed ? styles.taskCompleted : styles.taskText}>
              <Text style={completed ? styles.taskCompletedDay : styles.dayText}>{this.formatDay(date)}</Text>
              <Text style={completed ? styles.taskCompletedMonth : styles.monthText}>{this.formatMonth(date)}</Text>
            </View>
            <View style={styles.taskForm}>
              <Text style={ completed ? styles.taskCompletedText : styles.taskText }>{title}</Text>
            </View>
          </View>
        </TouchableHighlight>
    );
  }
}

// TODO: Create Theme styles (Buttons, Global Components, etc) so it can be imported on each component as required.
const styles = StyleSheet.create({
touchableArea:{
  height: 65,
  borderRadius: 15,
  marginTop: 10,
  marginLeft: 10,
  marginRight: 10,
  padding: 6,
  backgroundColor: Colors.white
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 65,
    backgroundColor: Colors.white
  },
  taskText: {
    ...Typografy.avenirFont,
    color: Colors.primaryText,
    fontSize: 21,
  },
  taskCompletedText: {
    ...Typografy.avenirFont,
    fontSize: 21,
    color: Colors.gray
  },
  taskCompletedDay: {
    ...Typografy.avenirFont,
    color: Colors.gray,
    fontSize: 18
  },
  dayText: {
    ...Typografy.avenirFont,
    color: Colors.primaryColorDarker,
    fontSize: 18
  },
  monthText: {
    ...Typografy.avenirFont,
    color: Colors.primaryColorDarker,
    fontSize: 14,
    paddingBottom: 5
  },
  taskText: {
    width: 50,
    alignItems: 'center',
    borderRightWidth: 2,
    borderRightColor: Colors.primaryColorDarker
 },
  taskCompletedMonth: {
    ...Typografy.avenirFont,
    color: Colors.gray,
    fontSize: 14,
    paddingBottom: 5
  },
  taskForm: {
    width: 300,
    marginLeft: 5,
    padding: 10
  },
  taskCompleted :{
    borderRightColor: Colors.gray,
    borderRightWidth: 2,
    alignItems: 'center',
    width: 50,
  }
});
