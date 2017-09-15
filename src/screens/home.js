import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';

import MainTextInput from '../components/MainTextInput';
import List from '../components/List';


export default class HomeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: ({ tintColor }) => (
      <Image
        source={require('../images/homeIcon.png')}
        style={[{width: 30, height:30}, {tintColor}]}
      ></Image>
    ),
  };

  render() {
    return (
      <View style={{flex:1}}>
        <MainTextInput/>
        <List/>
        <Text style={{flex: 4, fontSize:30}}>Fille me in!</Text>
      </View>
    )
  }
}
