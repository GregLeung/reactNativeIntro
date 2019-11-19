import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';

class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}


class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    let pic ={
      uri: 'https://cdn.imgbin.com/25/25/6/imgbin-cooked-rice-asian-cuisine-bowl-rice-xjAK5VsDfy4jRDCHHMxGxU6vi.jpg'
    }


    return (
      <View style={{alignItems: 'center', top: 50, backgroundColor: 'yellow'}}>
        <Image source={pic} style={{width:200, height: 100}}/>
        <Greeting name='Hello little rice' />
        <Greeting name='riceee' />
        <Greeting name='rice jai' />
      </View>
    );
  }
}
