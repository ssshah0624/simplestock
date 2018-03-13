import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

import Header from '../components/Header'
import PitchList from '../components/PitchList'
import PitchPreview from '../components/PitchPreview'


const Home = (props) => (
  <View>
    <Header />

    <PitchList />

    <PitchPreview />

  </View>
);

export default Home;
