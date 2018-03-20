import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';


const StockPreview = (props) => (
  <View style={{display:'flex', flex:1, backgroundColor:'red'}}>
    <View style={styles.previewStyle}>
      <View style={styles.contentSection}>
        <Text style={styles.tldr}>
          <Text style={{fontSize:20}}>TL;DR: {props.stock.tldr}</Text>
        </Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  //Sections
  previewStyle:{
    flexDirection: 'row',
    flex:1,
    justifyContent: 'space-around',
    backgroundColor: 'green'
  },
  contentSection:{
    backgroundColor: 'pink',
    flex: 5,
    justifyContent:'space-between',
    padding: 15,
  },

  //Elements
  tldr:{
    fontSize: 15,
  },


});

export default StockPreview;
