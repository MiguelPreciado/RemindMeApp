import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  View,
  Dimensions
} from 'react-native';
import Colors from './../theme/colors';
import Typografy from './../theme/typografy';


const screen = Dimensions.get('window').width;
export default class Category extends Component<{}> {

  constructor(props){
    super(props);
  }

  goToTaskScreen(){
    this.props.navigation.navigate('Tasks');
  }

  render() {
    const {id,title,image} = this.props;
    return (
        <TouchableHighlight>
          <View style={styles.container}>
            <Image
              style={styles.TaskIcon}
              source={image}/>
            <Text style={styles.categoryText}>{title}</Text>
          </View>
        </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 15,
    height: 230,
    marginLeft: 25,
    marginBottom: 40,
    width: screen.width,
    backgroundColor: Colors.white
  },
  TaskIcon: {
    width: 159,
    height: 159,
    marginLeft:2,
    marginTop: 10
  },
  categoryText: {
    fontSize: 20,
    textAlign:'center',
    marginTop:10,
    color: Colors.categoriesText
  }
});
