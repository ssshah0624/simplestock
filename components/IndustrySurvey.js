import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableHighlight, Image, Modal, ScrollView} from 'react-native';
import StarRating from 'react-native-star-rating';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Header from "./Header"
import ProfessionalCommentary from "./ProfessionalCommentary"

const IndustrySurvey = (props) => (
  <Modal animationType="slide" transparent={false} visible={props.isIndustryModalVisible} onRequestClose={() => { alert('Modal has been closed.'); }}>
    <View style={styles.containerStyle}>
      <View style={styles.header}>
        <TouchableHighlight onPress={props.industryModalToggle}>
          <Ionicons name="ios-arrow-back" size={30} color="#4F8EF7" />
        </TouchableHighlight>
        <Text style={{fontFamily:'Menlo', fontSize: 20}}>{props.stock.stock.name} - Industry</Text>
        <View/>
      </View>
      <View style={styles.scrollView}>
        <ScrollView>
          {props.stock.industries.map(x =>
            <View>
              <Text style={styles.sectionTitle}>Industry</Text>
              <View style={styles.sectionContent, {backgroundColor:'blue'}}>
                <Text style={styles.sectionKey}>{x.industry}</Text>
              </View>
              <Text style={styles.sectionTitle}>Overview</Text>
              <View style={styles.sectionContent}>
                <Text style={styles.sectionKey}>{x.overview}</Text>
              </View>
              <Text style={styles.sectionTitle}>Financials</Text>
              <View>
                {Object.keys(x.financial).map(finKey =>
                  <View style={styles.sectionContent}>
                    <Text style={styles.sectionKey}>{finKey}:</Text>
                    <StarRating disabled={true} emptyStar={'ios-star-outline'} fullStar={'ios-star'} halfStar={'ios-star-half'} iconSet={'Ionicons'} maxStars={5} rating={x.financial[finKey]} starSize={20} fullStarColor={'black'} />
                  </View>
                )}
              </View>
              <Text style={styles.sectionTitle}>Competition</Text>
              <View>
                {Object.keys(x.competition).map(compKey =>
                  <View style={styles.sectionContent}>
                    <Text style={styles.sectionKey}>{compKey}:</Text>
                    <StarRating disabled={true} emptyStar={'ios-star-outline'} fullStar={'ios-star'} halfStar={'ios-star-half'} iconSet={'Ionicons'} maxStars={5} rating={x.competition[compKey]} starSize={20} fullStarColor={'black'} />
                  </View>
                )}
              </View>
              <Text style={styles.sectionTitle}>Regulation</Text>
              <View>
                {Object.keys(x.regulation).map(regKey =>
                  <View style={styles.sectionContent}>
                    <Text style={styles.sectionKey}>{regKey}:</Text>
                    <StarRating disabled={true} emptyStar={'ios-star-outline'} fullStar={'ios-star'} halfStar={'ios-star-half'} iconSet={'Ionicons'} maxStars={5} rating={x.regulation[regKey]} starSize={20} fullStarColor={'black'} />
                  </View>
                )}
              </View>
            </View>
          )}
        </ScrollView>
      </View>
      <View style={styles.commentary}>
        <View style = {{borderWidth: 0.5, borderColor:'black', margin:5}} />
        <ProfessionalCommentary/>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  containerStyle:{
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  header:{
    marginTop: 15,
    marginBottom: -20,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent:'space-between',
  },
  scrollView:{
    flex: 6,
  },
  commentary:{
    flex: 4,
  },

  //elements
  sectionTitle:{
    backgroundColor:'gray',
    textAlign:'center',
    fontSize: 25,
    fontFamily: 'Menlo',
    color: 'white',
  },
  sectionContent:{
    backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionKey:{
    fontSize: 18,
    fontFamily: 'Menlo',
  }
});

export default IndustrySurvey;
