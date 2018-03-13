import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, FlatList } from 'react-native';

import PitchRow from './PitchRow'


const PitchList = (props) => (
  <FlatList
    data={props.pitches}
    renderItem={({item}) => <PitchRow
                              pitch={item}
                              onSelectPitch={(pitch) => props.onSelectPitch(pitch)}
                            /> }
  />
);

export default PitchList
