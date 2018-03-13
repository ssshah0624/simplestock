import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';

const PitchPreview = (props) => (
  <View style={{display:'flex', flex:1, justifyContent:'center',}}>
    <Text style={styles.titleSection}>{props.pitch.stock.name}</Text>
    <View style={styles.previewStyle}>
      <View style={styles.votingSection}>
        <Text>{props.pitch.author.firstName[0] + props.pitch.author.lastName[0]}</Text>
        <TouchableOpacity onPress={() => console.log("Upvoting:" +props.pitch.stock.name)}>
          <Image
            style={{width: 50, height: 50}}
            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Downvoting:" +props.pitch.stock.name)}>
          <Image
            style={{width: 50, height: 50}}
            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.tldr}>
        TL;DR: {props.pitch.tldr}
      </Text>
      <Text>Read More >>></Text>
    </View>
  </View>
);

const styles = StyleSheet.create({

  previewStyle:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    height: 50,
  },
  titleSection:{

  }

});

export default PitchPreview;
