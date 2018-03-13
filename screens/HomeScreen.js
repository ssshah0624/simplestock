import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';

import Header from '../components/Header'
import PitchList from '../components/PitchList'
import PitchPreview from '../components/PitchPreview'

class HomeScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  static navigationOptions = {
        header: null
  }

  render(){
    console.log("In Home Screen")
    return(
      <View>
        <Header />

      </View>
    )
  }
}

export default HomeScreen
