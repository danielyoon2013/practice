import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import { TabNavigator } from 'react-navigation';
import SortableGrid from 'react-native-sortable-grid'

const windowWidth = Dimensions.get('window').width;

const IMAGE_URLS = [
  {uri: "https://s3.us-east-2.amazonaws.com/coderaising-cs/38824_1.jpg"},
  {uri: "https://forums.imore.com/attachments/photography-videography/66363d1411762006t-show-us-some-photos-taken-iphone-6-imageuploadedbyimore-forums1411762005.474797.jpg"},
  {uri: "https://forums.imore.com/attachments/iphone-6/66677d1411955559t-post-pictures-video-taken-your-iphone-6-imageuploadedbyimore-forums1411955558.906521.jpg"},
  {uri: "http://lorempixel.com/400/400/nature"},
  {uri: "http://lorempixel.com/400/400/business"},
  {uri: "http://lorempixel.com/400/400/cats"},
  {uri: "http://lorempixel.com/400/400/food"},
  // {uri: "http://lorempixel.com/400/400/nightlife"},
  // {uri: "http://lorempixel.com/400/400/people"},
  // {uri: "http://lorempixel.com/400/400/technics"},
  // {uri: "http://lorempixel.com/400/400/transport"},
  // {uri: "http://lorempixel.com/400/400/sports"},
  // {uri: "http://lorempixel.com/400/400/fashion"},
  // {uri: "http://lorempixel.com/400/400/city"},
  // {uri: "http://lorempixel.com/400/400/people"},
  // {uri: "http://lorempixel.com/400/400/nature"},
  // {uri: "http://lorempixel.com/400/400/business"},
  // {uri: "http://lorempixel.com/400/400/cats"},
  // {uri: "http://lorempixel.com/400/400/food"},
  // {uri: "http://lorempixel.com/400/400/nightlife"},
  // {uri: "http://lorempixel.com/400/400/people"},
  // {uri: "http://lorempixel.com/400/400/technics"},
  // {uri: "http://lorempixel.com/400/400/transport"},
  // {uri: "http://lorempixel.com/400/400/sports"}
];

const storyList = [
  {title: "Peace", images: IMAGE_URLS},
  {title: "Cool Yoon", images: IMAGE_URLS},
  {title: "Sacrifice", images: IMAGE_URLS},
]



export default class Profilescreen extends Component {
  static navigationOptions = {
    tabBarLabel: ({ tintColor }) => (
      <Image
        source={require('../images/profileIcon.png')}
        style={[{width: 30, height:30}, {tintColor}]}
      ></Image>
    ),
  };

  calculateSize(rowLength) {
    const size = windowWidth / 3;
    const flexVal = Math.floor( windowWidth / rowLength + Math.random() * 240 );
    return {flex: flexVal, height: size/3}
  }

  renderRow(imagesRow) {
    return imagesRow.map((uri,i)=> (
      <Image key={i} style={styles.item, this.calculateSize(imagesRow.length)} source={uri}/>
    ))
  }

  renderImageChunk(imagesData) {
    const result = [];
    const length = imagesData.length;
    let count = 0;

    while(count < length) {
      const tuple = [];
      const willAdd = Math.floor(Math.random() * 4) + 1;

      for(let i = 0; i < willAdd; i++) {
        const image = imagesData[count + i];
        if(image) {tuple.push(image);}
      }
      result.push(tuple);
      count += willAdd;
    }

    return result;
  }

  renderImagesPerRow() {
    return this.renderImageChunk(IMAGE_URLS).map( (imagesRow,i) => (
      <View style={styles.row} key={i} style={{flexDirection:'row'}}>
        {this.renderRow(imagesRow)}
      </View>
    ))
  }

  renderPersonalImages(storyList) {
    return storyList.map( (story, i) => {
      return (
        <View>
          <Text>#{story.title}</Text>
          {this.renderImagesPerRow(story.images)}
        </View>
      )
    })
  }

  render() {
    return (
    <View style={styles.container}>

      <View style={styles.profileDescription}>
        <View  style={styles.profileImage}>
          <Image source={require('../images/profileImage.png')} style={{height:90, width : 90}}></Image>
        </View>
        <View style={styles.profileName}>
          <Text style={{fontSize:20}}>Daniel Yoon</Text>
          <Text style={{fontSize:10}}>Motivation to Realization</Text>
        </View>
      </View>

      <ScrollView style={{width: windowWidth * 0.9}}>
        {this.renderPersonalImages(storyList)}
      </ScrollView>

    </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center'
  },
  profileDescription:{
    height:100,
    marginTop: 30,
    alignItems:'center',
    flexDirection:'row'
  },
  profileImage:{
    height:100,
    width:100,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:20,
    borderRadius:30,
    overflow: 'hidden'
  },
  profileName: {
    flex:1
  },
  row: {
    flex: 1,
    marginVertical: 15
  },
  item: {
    backgroundColor: 'white'
  }
});
