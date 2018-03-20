import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableHighlight, Image, Modal, ScrollView} from 'react-native';
import StarRating from 'react-native-star-rating';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Header from "./Header"
import ProfessionalCommentary from "./ProfessionalCommentary"

const CompanySurvey = (props) => (
  <Modal animationType="slide" transparent={false} visible={props.isCompanyModalVisible} onRequestClose={() => { alert('Modal has been closed.'); }}>
    <View style={styles.header}>
      <TouchableHighlight
        onPress={props.companyModalToggle}>
        <Text>Back</Text>
      </TouchableHighlight>
    </View>
    <View style={styles.title}>
      <Text>{props.stock.stock.name} - Company</Text>
    </View>
    <ScrollView>
      <Text style={styles.industryTitle}>Why does this company exist?</Text>
      <View style={styles.industryContent}>
        <Text>{props.stock.company.companyOverview}</Text>
      </View>
      <Text style={styles.overviewTitle}>How does this company make money?</Text>
      <View style={styles.overviewContent}>
        <Text>{props.stock.company.customerOverview}</Text>
      </View>
      <Text style={styles.financialTitle}>Financials</Text>
      <View style={styles.financialContent}>
        {Object.keys(props.stock.company.financial).map(finKey =>
          <View>
            <Text>{finKey}:</Text>
            <StarRating disabled={true} emptyStar={'ios-star-outline'} fullStar={'ios-star'} halfStar={'ios-star-half'} iconSet={'Ionicons'} maxStars={5} rating={props.stock.company.financial[finKey]} starSize={20} fullStarColor={'black'} />
          </View>
        )}
      </View>
      <Text style={styles.competitionTitle}>Competition</Text>
      <View style={styles.competitionContent}>
        {Object.keys(props.stock.company.competition).map(compKey =>
          <View>
            <Text>{compKey}:</Text>
            <StarRating disabled={true} emptyStar={'ios-star-outline'} fullStar={'ios-star'} halfStar={'ios-star-half'} iconSet={'Ionicons'} maxStars={5} rating={props.stock.company.competition[compKey]} starSize={20} fullStarColor={'black'} />
          </View>
        )}
      </View>
      <Text style={styles.leadershipTitle}>Leadership</Text>
      <View style={styles.leadershipContent}>
        {Object.keys(props.stock.company.leadership).map(leadKey =>
          <View>
            <Text>{leadKey}:</Text>
            <StarRating disabled={true} emptyStar={'ios-star-outline'} fullStar={'ios-star'} halfStar={'ios-star-half'} iconSet={'Ionicons'} maxStars={5} rating={props.stock.company.leadership[leadKey]} starSize={20} fullStarColor={'black'} />
          </View>
        )}
      </View>
      <ProfessionalCommentary />
    </ScrollView>
  </Modal>
);

const styles = StyleSheet.create({
  header:{
    marginTop: 40,
  },
  title:{

  },
  overview:{

  },
});

export default CompanySurvey;
