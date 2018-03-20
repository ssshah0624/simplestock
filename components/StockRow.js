import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import StarRating from 'react-native-star-rating';
import Ionicons from 'react-native-vector-icons/Ionicons';



const StockRow = (props) => (
    <TouchableOpacity style={styles.rowStyle} onPress={() => props.onSelectStock(props.stock)}>
      <View style={styles.tickerSection}>
        <Text style={styles.tickerText}>{props.stock.stock.ticker}</Text>
      </View>
      <View style={styles.industryRatingSection}>
        <Text style={styles.industryText}>Industry</Text>
        <StarRating
          disabled={true}
          emptyStar={'ios-star-outline'}
          fullStar={'ios-star'}
          halfStar={'ios-star-half'}
          iconSet={'Ionicons'}
          maxStars={5}
          rating={props.industryRating}
          starSize={20}
          fullStarColor={'black'}
        />
      </View>
      <View style={styles.companyRatingSection}>
        <Text style={styles.companyText}>Company</Text>
        <StarRating
          disabled={true}
          emptyStar={'ios-star-outline'}
          fullStar={'ios-star'}
          halfStar={'ios-star-half'}
          iconSet={'Ionicons'}
          maxStars={5}
          rating={props.companyRating}
          starSize={20}
          fullStarColor={'black'}
        />
      </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
  //Row
  rowStyle:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-around',
    height: 70,
    backgroundColor:'gray',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'black',
  },
  //Sections
  tickerSection: {
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'center',
  },
  industryRatingSection: {
    flex: 1,
    backgroundColor: 'blue',
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'center',
  },
  companyRatingSection: {
    flex: 1,
    backgroundColor: 'red',
    marginRight: 15,
    justifyContent: 'center',
  },
  //Elements
  tickerText:{
    fontSize:30,
  },
  industryText:{
    fontSize:20,
    textAlign: 'center',
  },
  companyText:{
    fontSize:20,
    textAlign: 'center',
  }
});

export default StockRow
