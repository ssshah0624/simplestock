import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

const LoginOrSignUp = (props) => (
  <View>
    <Button
      onPress={props.startLoginFlow}
      title="Log In"
      color="#841584"
      accessibilityLabel="Log In"
      />
      <Button
        onPress={props.startSignUpFlow}
        title="Sign Up"
        color="#841584"
        accessibilityLabel="Sign Up"
        />
  </View>
);

export default LoginOrSignUp;
