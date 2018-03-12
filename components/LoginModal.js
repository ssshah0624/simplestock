import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Image, Modal, TouchableHighlight } from 'react-native';

const LoginModal = (props) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={props.isModalVisible}
    onRequestClose={() => {
      alert('Modal has been closed.');
    }}>
    <View style={{marginTop: 22}}>
      <View>
        <Text>Log In!</Text>
        <TouchableHighlight
          onPress={props.makeModalInvisible}>
          <Text>X</Text>
        </TouchableHighlight>
      </View>
      <SignIn initiateSignIn={(email, pass) => props.initiateSignIn(email, pass)} />
    </View>
  </Modal>
);

export default LoginModal;
