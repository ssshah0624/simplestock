import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableHighlight, Image, Modal, ScrollView} from 'react-native';
import StarRating from 'react-native-star-rating';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfessionalCommentary = (props) => (
  <View style={styles.locked}>
    <View style={styles.titleSection}>
      <Ionicons name="ios-lock" size={60}></Ionicons>
      <Text style={styles.titleText}>Expert Commentary</Text>
    </View>
    <Text style={styles.bulletText}>* By Trusted Financial Professionals & Industry Insiders</Text>
    {/* <Text style={styles.bulletText}>* Customers rated this commentary: 4/5</Text>
    <Text style={styles.bulletText}>* Recent Participants: VC @ Kleiner, Executive @ Pinterest & Manager of $100B+ Mutual Fund</Text> */}

    <Button
      onPress={() => console.log("Notify me pressed")}
      title="Put me on the purchase waitlist"
      color="#841584"
      accessibilityLabel="Put me on the purchase waitlist"
    />
  </View>
);

const styles = StyleSheet.create({
  //Section
  locked:{
    display: 'flex',
    flex:1,
    backgroundColor:'#afb5bf',
    color: "white",
    fontFamily: "Menlo",
    fontSize: 30,
    justifyContent:'space-around',
    alignContent:'center',
  },
  titleSection:{
    flexDirection: 'row',
    marginLeft: "5%",
    marginTop:'5%',
  },

  //Elements
  titleText:{
    fontFamily: 'Menlo',
    fontSize: 40,
    color:'white',
  },
  bulletText:{
    fontFamily: 'Menlo',
    fontSize: 15,
    color:'white',
  }

});

export default ProfessionalCommentary;
