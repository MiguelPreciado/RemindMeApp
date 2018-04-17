/**
Pantalla de categorías en el cual se encuentran las 4 categorias que tendra la aplicación.
Hecho por: Dámaso Valdés Rosales
Ticket: LINCE-002
*/


import React, { Component } from 'react';
import {
  StyleSheet,
  ImageBackground,
  Text,
  Image,
  View,
  TouchableHighlight,
  ScrollView
} from 'react-native';
import Colors from './../theme/colors';
import Categories from './../components/Categories';

export default class CategoriesScreen extends Component<{}> {

  constructor(props){
    super(props);
    let work = 'TRABAJO', school = 'ESCUELA', home = 'HOGAR', friends = 'AMIGOS';
    this.state={
      categories:[{id:1,title:work,image:require('./../images/category-work.png')},
                  {id:2,title:school,image:require('./../images/category-school.png')},
                  {id:3,title:home,image:require('./../images/category-home.png')},
                  {id:4,title:friends,image:require('./../images/category-friends.png')}]
     }
  }

  showCategories(categories){
          return categories.map( category => {
            return (<Categories
                    key={category.id}
                    id={category.id}
                    title={category.title}
                    image={category.image}/>)
        });
    }

  render() {
    const appBackground = require('./../images/pattern.png');
    const remindMeLogo = require('./../images/remindMe-logo.png');
    return(
      <ScrollView>
        <ImageBackground
          style={styles.container}
          source={appBackground}>
          <Image
            style={styles.remindMeLogo}
            source={remindMeLogo}/>
            <View style={styles.categories}>
              {this.showCategories(this.state.categories)}
            </View>
         </ImageBackground>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  remindMeLogo:{
    marginLeft: 60,
    marginTop: 40,
    width: 285,
    height: 75
  },
  categories: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    marginRight: 10,
    marginLeft: 5
  },
  categoriesView:{
    width: 150,
    height: 150
  }
});
