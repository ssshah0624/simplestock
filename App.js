import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { AppRegistry, Platform, StyleSheet, Text, View } from 'react-native';

import WelcomeScreen from './screens/WelcomeScreen'
import HomeScreen from './screens/HomeScreen'

export default StackNavigator({
  Welcome: {
    screen: WelcomeScreen,
  },
  Home: {
    screen: HomeScreen,
  },
},
{initialRouteName: 'Welcome'});

AppRegistry.registerComponent('WelcomeScreen', () => WelcomeScreen);
