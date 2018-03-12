import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';

class SignUp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: ''
    };
  }

  initiateSignUp(){
    this.state.password === this.state.passwordConfirmation ?
      this.props.initiateSignUp(this.state.email, this.state.password) :
      console.log("Passwords don't match - through up an Alert")
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
          <TextInput
             style={{height: 40, borderColor: 'gray', borderWidth: 1}}
             onChangeText={(passwordConfirmation) => this.setState({passwordConfirmation})}
             placeholder="confirm password"
             secureTextEntry={true}
             value={this.state.passwordConfirmation}
           />
          <Button
            onPress={() => this.props.initiateSignUp(this.state.email, this.state.password)}
            title="Sign In"
            color="#841584"
            accessibilityLabel="Sign Up"
          />
      </View>
    )
  }
}

export default SignUp;
