import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Image, Modal, TouchableHighlight } from 'react-native';

import LoginOrSignUp from '../components/LoginOrSignUp'
import SignUpModal from '../components/SignUpModal'
import LoginModal from '../components/LoginModal'

const Welcome = (props) => (
  <View>

    <LoginModal
      isModalVisible={props.loginModalVisible}
      makeModalInvisible={props.loginModalInvisible}
      initiateSignIn={(email, password) => props.initiateSignIn(email, password)}
    />

    <SignUpModal
      isModalVisible={props.signUpModalVisible}
      makeModalInvisible={props.signUpModalInvisible}
      initiateSignUp={(email, password) => props.initiateSignUp(email, password)}
    />


    <Image
      style={{width: 50, height: 50}}
      source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
    />

    <LoginOrSignUp  startLoginFlow={() => props.startLoginFlow()} startSignUpFlow={() => props.startSignUpFlow()}/>
  </View>
);

export default Welcome;
