import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';



import HomeScreen from './src/screens/home';
import StoryScreen from './src/screens/story';
import ProfileScreen from './src/screens/profile';


const App = TabNavigator({
  Tab1: {screen: HomeScreen},
  Tab2: {screen: StoryScreen},
  Tab3: {screen: ProfileScreen}
},{
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  showIcon: true,
  tabBarOptions: {
    activeTintColor: '#1A237E',
    inactiveTintColor: '#424ebf',
    indicatorStyle: {backgroundColor:'#424ebf'},
    style: {
      backgroundColor: 'white'
    }
  }
});



export default App;
