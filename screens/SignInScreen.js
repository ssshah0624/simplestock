import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';

class SignInScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: 'sunny@simplestock.co',
      password: '**********'
    };
  }

  render(){
    return(
      <View>
        <TextInput
           style={{height: 40, borderColor: 'gray', borderWidth: 1}}
           onChangeText={(email) => this.setState({email})}
           value={this.state.email}
         />
      </View>
    )
  }
}
