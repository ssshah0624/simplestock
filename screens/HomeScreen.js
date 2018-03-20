import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, FlatList, Dimensions} from 'react-native';

import Header from '../components/Header'
import StockList from '../components/StockList'
import StockPreview from '../components/StockPreview'
import IndustryAndCompanyRatings from "../components/IndustryAndCompanyRatings"

import Carousel from 'react-native-carousel'

var demoStocks = [
  {
  createdAt: "8:10 PM ET Thu 8 March 2018",
  stock: {ticker: "WDAY", tldr:"Workday makes software", name:"Workday", formalName:"Workday Inc.", currentPrice: 120.06,},
  industries: [
    {
      industry: "Cloud Computing",
      overview: "Cloud computing refers to fun!",
      relevantStocks: ["9302139", "4930249"],
      averageRating:4,
      financial:{
        revenueGrowth:5,
      },
      competition:{
        levelOfCompetition:2,
      },
      regulation:{
        regulatoryFavor: 1,
      },
      professionalCommentaryId: "930249023",
    }
  ],
  company: {
    averageRating: 5,
    companyOverview: "Workday helps HR executives better manage their employee population.",
    customerOverview: "Workday targets Fortune 500 brands",
    financial: {
      revenueGrowth: 5,
      customerGrowth: 3,
      operatingMarginGrowth: 4,
    },
    competition:{
      competitivePosition: 5,
      competitiveAdvantage: 4,
    },
    leadership:{
      industryExperience: 5,
      stability: 4.4,
      employeeHappiness: 5,
    },
  },
},
  {
  createdAt: "8:10 PM ET Thu 8 March 2018",
  stock: {ticker: "FB", tldr:"Facebook helps you stay connected", name:"Facebook", formalName:"Facebook Inc.", currentPrice: 203.06,},
  industries: [
    {
      industry: "Internet Information Providers",
      overview: "This industry comprises of online media outlets like Google, Facebook and Baidu. They are in the business of providing information to their end user via the internet.",
      relevantStocks: ["5490549", "30432432"],
      averageRating:2,
      financial:{
        revenueGrowth:1,
      },
      competition:{
        levelOfCompetition:3,
      },
      regulation:{
        regulatoryFavor: 1,
      },
      professionalCommentaryId: "54905940",
    }
  ],
  company: {
    averageRating: 3,
    companyOverview: "Facebook exists because people have a fundamental need to connect. As people spend more and more time online, they turn to Facebook to satisfy this need.",
    customerOverview: "Facebook makes money mainly through highly targeted video & text-based advertising.",
    financial: {
      revenueGrowth: 5,
      customerGrowth: 1,
      operatingMarginGrowth: 1,
    },
    competition:{
      competitivePosition: 5,
      competitiveAdvantage: 3,
    },
    leadership:{
      industryExperience: 3,
      stability: 4,
      employeeHappiness: 5,
    },
  },
}]

class HomeScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activeStock: demoStocks[0],
      isIndustryModalVisible: false,
      isCompanyModalVisible: false,
    };
  }
  static navigationOptions = {
        header: null
  }

  onSelectStock(stock){
    console.log("Stock has changed to:", stock.stock.name)
    this.setState({activeStock: stock})
  }

  industryModalToggle(){
    console.log("Industry Modal toggled")
    this.setState({isIndustryModalVisible: !this.state.isIndustryModalVisible})
  }

  companyModalToggle(){
    console.log("Company Modal toggled")
    this.setState({isCompanyModalVisible: !this.state.isCompanyModalVisible})
  }

  render(){
    return(
      <View style={styles.mainSection}>
        <Header />
        <StockList style={{flex: 5}} stocks={demoStocks} onSelectStock={(stock) => this.onSelectStock(stock)} />

        <View style={{flex: 1, alignContent: 'flex-end'}}>
          <Text style={styles.titleSection}>{this.state.activeStock.stock.formalName}</Text>
          <View style={{flex: 3}}>
            <Carousel width={375} loop={false} animate={false} hideIndicators={true} indicatorOffset={0}>
              <View style={styles.container}>
                <StockPreview stock={this.state.activeStock.stock} />
              </View>
              <View style={styles.container}>
                <Text>Page 2</Text>
              </View>
              <View style={styles.container}>
                <Text>Page 3</Text>
              </View>
            </Carousel>
          </View>
          <View style={{flex: 1}}>
            <IndustryAndCompanyRatings
              stock={this.state.activeStock}
              isIndustryModalVisible={this.state.isIndustryModalVisible}
              isCompanyModalVisible={this.state.isCompanyModalVisible}
              industryModalToggle={() => this.industryModalToggle()}
              companyModalToggle={() => this.companyModalToggle()}
            />
          </View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    flex: 1,
    backgroundColor: 'transparent',
  },
  mainSection:{
    display:'flex',
    flex:1,
    flexDirection:'column',
    justifyContent:'flex-end',
  },
  titleSection:{
    textAlign:'center',
    textDecorationLine: 'underline',
    fontSize: 30,
  },
});


export default HomeScreen
