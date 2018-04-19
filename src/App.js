/**
 * RemindMe App
 * React Native Application for iOS and Android
 * @flow
 */

import React, { Component } from 'react';
import {
  StackNavigator,
} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import TasksScreen from './screens/TasksScreen';
import CategoriesScreen from './screens/CategoriesScreen';


export default App = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Tasks: { screen: TasksScreen },
    Categories: { screen: CategoriesScreen}
  },
  {
    headerMode: 'none'
  }
);
