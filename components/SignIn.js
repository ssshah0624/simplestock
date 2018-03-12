import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';

class SignIn extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  render(){
    return(
      <View>
        <TextInput
           style={{height: 40, borderColor: 'gray', borderWidth: 1}}
           onChangeText={(email) => this.setState({email})}
           placeholder="email"
           value={this.state.email}
         />
         <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(password) => this.setState({password})}
            placeholder="password"
            secureTextEntry={true}
            value={this.state.password}
          />
          <Button
            onPress={() => this.props.initiateSignIn(this.state.email, this.state.password)}
            title="Sign In"
            color="#841584"
            accessibilityLabel="Sign in"
          />
      </View>
    )
  }
}

export default SignIn;
