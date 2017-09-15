import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, FlatList, TouchableWithoutFeedback} from 'react-native';

class List extends Component {
    _renderItem(item){
      const itemimage = item.image;
        return (
            // <TouchableWithoutFeedback onPress={
            //     () => navigate('Details', {item: item})}
            // >
            <View>
              <Text>{item.image}</Text>
              <Image style={{width: 70, height: 70}} source={item.image}/>
            </View>

            // </TouchableWithoutFeedback>
        )
    }


    keyExtractor(item, index) {return index; };

    render(){
        const {getTwoRows} = this.props;
        const dummyData = [{
          image: require('../images/homeIcon.png'),
        }, {
          image: require('../images/profileIcon.png'),
        },{
          image: require('../images/storyIcon.png'),
        },{
          image: require('../images/storyIcon.png'),
        },{
          image: require('../images/storyIcon.png'),
        },{
          image: require('../images/storyIcon.png'),
        },{
          image: require('../images/storyIcon.png'),
        }];

        return (
            <View style={{flex: 1, height: 30}}>
              <Text style={styles.text}>My List</Text>
              <FlatList
                  horizontal
                  SeparatorComponent={() => <View style={{width: 5}} />}
                  renderItem={({item}) => this._renderItem(item)}
                  data={dummyData}
                  keyExtractor={this.keyExtractor}
              />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'black'
    }
})

export default List
