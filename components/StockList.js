import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, FlatList } from 'react-native';

import StockRow from './StockRow'


const StockList = (props) => (
  <FlatList
    data={props.stocks}
    renderItem={({item}) => <StockRow
                              stock={item}
                              onSelectStock={(stock) => props.onSelectStock(stock)}
                            /> }
  />
);

export default StockList
