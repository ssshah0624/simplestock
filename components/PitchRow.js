import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';


const PitchRow = (props) => (
    <TouchableOpacity style={styles.rowStyle} onPress={() => props.onSelectPitch(props.pitch)}>
      <View style={styles.ratingSection}>
        <View style={styles.upvoteMeter}/>
        <View style={styles.downvoteMeter}/>
      </View>
      <View style={styles.tickerSection}>
        <Text>{props.pitch.stock.ticker}</Text>
      </View>
      <View style={styles.activitySection}>
        <Text>{props.pitch.author.firstName[0] + props.pitch.author.lastName[0]}</Text>
        <Text>{props.pitch.purchases} others bought</Text>
      </View>
      <View style={styles.activitySection}>
        <Button
          onPress={() => console.log("Buy "+ props.pitch.stock.name)}
          title="BUY"
          color="#841584"
          accessibilityLabel={"Buy "+props.pitch.stock.name}
        />
      </View>
      <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, }} />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
  //Row
  rowStyle:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    height: 50,
  },
  //Sections
  ratingSection: {
    display:'flex',
    flex: 1,
  },
  tickerSection: {
    flex: 3,
  },
  activitySection: {
    flex: 3,
  },
  //Elements
  upvoteMeter:{
    flex: 4,
    backgroundColor: 'green'
  },
  downvoteMeter:{
    flex: 1,
    backgroundColor: 'red'
  },
});

export default PitchRow
