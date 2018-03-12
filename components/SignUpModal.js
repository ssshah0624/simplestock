import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Image, Modal, TouchableHighlight } from 'react-native';

import SignUp from '../components/SignUp'

const SignUpModal = (props) => (
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.isModalVisible}
      onRequestClose={() => {
        alert('Modal has been closed.');
      }}>
      <View style={{marginTop: 22}}>
        <View>
          <Text>Sign Up!</Text>
          <TouchableHighlight
            onPress={props.makeModalInvisible}>
            <Text>X</Text>
          </TouchableHighlight>
        </View>
        <SignUp initiateSignUp={(email, pass) => props.initiateSignUp(email, pass)} />
      </View>
    </Modal>
);

export default SignUpModal;
