import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';


const PitchList = (props) => (
  <FlatList
    data={props.pitches}
    renderItem={({item}) => (
      <MyItem
        item={item}
        onPress={() =>
          this.setState((oldState) => ({
            selected: {
              // New instance breaks `===`
              ...oldState.selected, // copy old data
              [item.key]: !oldState.selected[item.key], // toggle
            },
          }))
        }
        selected={
          !!this.state.selected[item.key] // renderItem depends on state
        }
      />
    )}
    selected={
      // Can be any prop that doesn't collide with existing props
      this.state.selected // A change to selected should re-render FlatList
    }
  />
);

export default PitchList
