import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import StarRating from 'react-native-star-rating';
import Ionicons from 'react-native-vector-icons/Ionicons';

import IndustrySurvey from "./IndustrySurvey"
import CompanySurvey from "./CompanySurvey"


const IndustryAndCompanyRatings = (props) => (
  <View style={styles.companyAndIndustrySection}>
    <View style={styles.industrySection}>
      <TouchableOpacity onPress={() => props.industryModalToggle()}>
        <Text style={{textAlign:'center', fontSize: 20,}}>Industry</Text>
      </TouchableOpacity>
      <StarRating
        disabled={true}
        emptyStar={'ios-star-outline'}
        fullStar={'ios-star'}
        halfStar={'ios-star-half'}
        iconSet={'Ionicons'}
        maxStars={5}
        rating={props.stock.industries.length > 1 ?
                    props.stock.industries.reduce((a,b) => a.averageRating+b.averageRating):
                    props.stock.industries[0].averageRating}
        starSize={20}
        fullStarColor={'black'}
      />
    </View>
    <View style={styles.companySection}>
      <TouchableOpacity onPress={() => props.companyModalToggle()}>
        <Text style={{textAlign:'center', fontSize: 20,}}>Company</Text>
      </TouchableOpacity>
      <StarRating
        disabled={true}
        emptyStar={'ios-star-outline'}
        fullStar={'ios-star'}
        halfStar={'ios-star-half'}
        iconSet={'Ionicons'}
        maxStars={5}
        rating={props.stock.company.averageRating}
        starSize={20}
        fullStarColor={'black'}
      />
    </View>

    <IndustrySurvey
      stock={props.stock}
      isIndustryModalVisible={props.isIndustryModalVisible}
      industryModalToggle={() => props.industryModalToggle()}
    />
    <CompanySurvey
      stock={props.stock}
      isCompanyModalVisible={props.isCompanyModalVisible}
      companyModalToggle={() => props.companyModalToggle()}
    />
  </View>
);

const styles = StyleSheet.create({
  companyAndIndustrySection:{
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    backgroundColor:'green',
  },
  industrySection:{
    flex:1,
    marginLeft: 10,
    marginRight: 15,
    justifyContent:'flex-end',
  },
  companySection:{
    flex:1,
    marginLeft: 15,
    marginRight: 15,
    justifyContent:'flex-end',
  },
});

export default IndustryAndCompanyRatings
