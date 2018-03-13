import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';

import Header from '../components/Header'
import PitchList from '../components/PitchList'
import PitchPreview from '../components/PitchPreview'

var demoPitch = [{
  createdAt: "8:10 PM ET Thu 8 March 2018",
  stock: {ticker: "WDAY", name:"Workday", currentPrice: 120.06, industry: "Technology"},
  priceTarget: 150,
  recommendation: 'BUY',
  upvotes: 80,
  downvotes: 20,
  purchases: 59,
  author: {firstName: "Jim", lastName: "Cramer", occupation: "TV Host", currentRating: 0.68, numReviewers: 321, numPitches: 8, historic7DayReturns:0.14, historic30DayReturns:0.30, historic90DayReturns:0.06, style:'value'},
  tldr: "Workday is revolutionizing the way we do business. Cramer recommends finding the biggest winners, waiting for a good entry point and then hanging on for the ride",
  full: "The last two cloud kings were phenomenal growers Splunk and Workday. Splunk helps companies analyze and use their data in the best way possible, while Workday, like ServiceNow, focuses on making human resources and finance departments more efficient. The bottom line? When you identify a powerful theme that's revolutionizing the way we do business, find the biggest winners, wait for a good entry point and then hang on for the ride, Cramer said. Adobe, Salesforce.com [with CEO] Marc Benioff, ServiceNow, Red Hat, VMWare, a little convoluted ownership structure there, Splunk and Workday — they are the kings of the cloud and they all belong on your stock market shopping list."
},
{
  createdAt: "8:10 PM ET Thu 8 March 2018",
  stock: {ticker: "FB", name:"Facebook", currentPrice: 320.06, industry: "Technology"},
  priceTarget: 500,
  recommendation: 'BUY',
  upvotes: 2324,
  downvotes: 403,
  purchases: 1231,
  author: {firstName: "Ronak", lastName: "Gandhi", occupation: "Hedgefund Analyst", currentRating: 0.98, numReviewers: 300, numPitches: 40, historic7DayReturns:0.14, historic30DayReturns:0.2, historic90DayReturns:0.21, style:'value'},
  tldr: "Mobile penetration around the world is increasing 10x. FB is present on 90% of mobile devices positioning it's ad business rather well.",
  full: "By 2021, FB’s earnings should reach US$32.11B, from current levels of US$15.92B, resulting in an annual growth rate of 18.62%. EPS reaches $10.48 in the final year of forecast compared to the current $5.49 EPS today. Earnings growth appears to be a result of top-line expansion of 19.26%, dropping down to the bottome-line. As revenues is expected to outpace earnings, analysts expect margins to contract from the current 39.16% to 37.26% by the end of 2021."
}]

class HomeScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activePitch: demoPitch[0],
    };
  }
  static navigationOptions = {
        header: null
  }

  onSelectPitch(pitch){
    console.log("Pitch has changed to:", pitch.stock.name)
    this.setState({activePitch: pitch})
  }

  render(){
    console.log("In Home Screen")
    return(
      <View style={{display:'flex', flex:1, flexDirection:'column', justifyContent:'space-between'}}>
        <Header/>
        <PitchList pitches={demoPitch} onSelectPitch={(pitch) => this.onSelectPitch(pitch)} />
        <PitchPreview pitch={this.state.activePitch} />
      </View>
    )
  }
}

export default HomeScreen
