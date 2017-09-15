import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { TabNavigator } from 'react-navigation';

import SortableListView from 'react-native-sortable-listview';

import MainTextInput from '../components/MainTextInput';



let data = {
  hello: { text: 'world' },
  how: { text: 'are you' },
  test: { text: 123 },
  this: { text: 'is' },
  a: { text: 'a' },
  real: { text: 'real' },
  drag: { text: 'drag and drop' },
  bb: { text: 'bb' },
  cc: { text: 'cc' },
  dd: { text: 'dd' },
  ee: { text: 'ee' },
  ff: { text: 'ff' },
  gg: { text: 'gg' },
  hh: { text: 'hh' },
  ii: { text: 'ii' },
  jj: { text: 'jj' },
  kk: { text: 'kk' },
}

let order = Object.keys(data) //Array of keys

class RowComponent extends Component {
  render() {
    console.log(this.props.data.text);
    return (
      <View>
      <TouchableHighlight
        style={{
          padding: 25,
          backgroundColor: 'black',
          borderBottomWidth: 1,
          borderColor: 'black',
        }}
      >
        <Text>{this.props.data.text}hddddddddihi</Text>
      </TouchableHighlight>
      </View>
    )
  }
}


export default class StoryScreen extends Component {

  static navigationOptions = {
    tabBarLabel: ({ tintColor }) => (
      <Image
        source={require('../images/storyIcon.png')}
        style={[{width: 30, height:30}, {tintColor}]}
      ></Image>
    )
  }

  render() {
    console.log("dddddddd");
    return (
      <View>
        <MainTextInput/>
        <Text>Hi1</Text>
        <SortableListView
          style={{ flex: 1 }}
          data={data}
          order={order}
          onRowMoved={e => {
            order.splice(e.to, 0, order.splice(e.from, 1)[0])
            this.forceUpdate()
          }}
          renderRow={row => <RowComponent data={row} />}
        />
        <Text>JJJJJJJ</Text>
      </View>
    )
  }
}
