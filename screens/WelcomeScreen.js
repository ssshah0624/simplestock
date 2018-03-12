import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Image, Button, Modal } from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import firebase from 'react-native-firebase';

import Welcome from '../components/Welcome'
import Home from '../components/Home'


class WelcomeScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      loginModalVisible: false,
      signUpModalVisible: false,
    };
  }

  static navigationOptions = {
        header: null
  }

  componentDidMount() {
    // do stuff while splash screen is shown
    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        loading: false,
        user,
      });
    });

    //hide Splash Screen once everything is loaded :)
    SplashScreen.hide();
  }

  componentWillUnmount() {
    this.authSubscription();
  }

  onSignIn(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      // If you need to do anything with the user, do it here
      // The user will be logged in automatically by the
      // `onAuthStateChanged` listener we set up in App.js earlier
      console.log("Congrats! User is officially logged in:", user)
    })
    .catch((error) => {
      const { code, message } = error;
      // For details of error codes, see the docs
      // The message contains the default Firebase string
      // representation of the error
      console.log("Shoot! Error on login:", code, message)
    });
  }

  onSignUp(email, password){
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      // If you need to do anything with the user, do it here
      // The user will be logged in automatically by the
      // `onAuthStateChanged` listener we set up in App.js earlier
      console.log("Congrats! User is officially registered & in:", user)
    })
    .catch((error) => {
      const { code, message } = error;
      // For details of error codes, see the docs
      // The message contains the default Firebase string
      // representation of the error
      console.log("Shoot! Error on sign up & login:", code, message)
    });
  }

  render(){
    const { navigate } = this.props.navigation;
    // The application is initialising
   if (this.state.loading) return null;
   // The user is an Object, so they're logged in
   if (this.state.user) return navigate('Home', { user: this.state.user })

   return <Welcome
              startLoginFlow={() => this.setState({loginModalVisible: true})}
              startSignUpFlow={() => this.setState({signUpModalVisible: true})}
              loginModalVisible={this.state.loginModalVisible}
              signUpModalVisible={this.state.signUpModalVisible}
              loginModalInvisible={() => this.setState({loginModalVisible: false})}
              signUpModalInvisible={() => this.setState({signUpModalVisible: false})}
              initiateSignUp={(email, password) => this.onSignUp(email, password)}
              initiateSignIn={(email, password) => this.onSignIn(email, password)}
            />;
  }
}

export default WelcomeScreen;
