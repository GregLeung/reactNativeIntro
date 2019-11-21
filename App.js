import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';

class Blink extends Component {

  componentDidMount(){
    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  //state object
  state = { isShowingText: true };

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text>{this.props.text}</Text>
    );
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text='I love to bliasdasdasdnk' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}



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

class LotsOfGreetings extends Component {
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
