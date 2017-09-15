import React, { Component } from 'react';
import { AppRegistry, TextInput, View, StyleSheet } from 'react-native';

export default class MainTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Search Where You Love!!' };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          underlineColorAndroid= 'rgba(0,0,0,0)'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5
  },
  textInput: {
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 6,
    marginTop: 30,
    borderColor: '#1A237E',
    borderWidth: 2,
  },
});
