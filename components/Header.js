import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Image } from 'react-native';


const Header = (props) => (
  <View style={styles.header}>
    {/* User Settings Icon */}
    <Image
      style={{width: 50, height: 50}}
      source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
    />

    {/* Filter Icon */}
    <Image
      style={{width: 50, height: 50}}
      source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
    />

  </View>
);

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});

export default Header;
