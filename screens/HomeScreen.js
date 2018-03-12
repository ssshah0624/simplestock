import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';

class HomeScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  static navigationOptions = {
        header: null
  }

  render(){
    return(
      <View>
        <Text>We home sonnnnn</Text>
      </View>
    )
  }
}

export default HomeScreen
