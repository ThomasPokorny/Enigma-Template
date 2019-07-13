/**
 * Enigma Engine, Basic Template APP for Text Based RPG Gamess
 * @author Thomas Pokorny
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import imgBook from './book.gif'; 

/*
import imgCandle from './candle.gif'; 
import imgLibray from './library.png'; 
*/

const storyJson = require('./story.1.json');


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      renderGame : false,
      storyPointer: 0, // the default id of the first story card is: 0 
      storyCard: [],
      story: storyJson
    };

    this.createCard = this.createCard.bind(this);
    this.renderCardLinkElement = this.renderCardLinkElement.bind(this);
  }

  createCard(id){

    for(var i = 0; i < this.state.story['story'].length; i++){
      var idTemp = this.state.story['story'][i].id;
      if(idTemp == id)
      {
        var currentCard = this.state.story['story'][i];
      }
    }

    this.setState({
      storyCard: currentCard
    })
  }

  renderCardLinkElement(link){
      return <Text style={styles.links} onPress={() => this.createCard(link.destiny)} > {link.desc} </Text>; 
  }

  render() {
    if( !this.state.renderGame)
      return (
        <View style={styles.container}>
          <View style={styles.mainContainer}>
          
            <Image source={imgBook} />

            <Text style={styles.welcome}>Welcome to Enigma!</Text>

            <Text style={styles.options} onPress={ () =>{ this.setState({ renderGame : true }); this.createCard(this.state.storyPointer) }} >START GAME</Text>
            <Text style={styles.options}>CREATOR MODE</Text> 
            <Text style={styles.options}>INFO</Text>

          </View>
  
        </View>
      );

    if(this.state.renderGame)
      return (
        <View style={styles.container}>
          <View style={styles.mainContainer}>

            <Text style={styles.welcome}>{this.state.storyCard.desc}</Text>

            <View style={{flex: 2, flexDirection: 'row'}}>
                {this.state.storyCard.links.map(link => 
                  this.renderCardLinkElement(link) 
                )}
            </View>

          </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252c3a'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
    fontFamily: 'CourierNewPSMT'
  },
  mainContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 150,
    marginTop: 150,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#252c3a',
    borderColor : 'white',
    borderWidth: 1
  },
  options: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333333',
    marginTop: 25,
    color: 'white',
    fontFamily: 'CourierNewPSMT'
  },
  links: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333333',
    marginTop: 25,
    color: 'white',
    fontFamily: 'CourierNewPSMT'
  },
});
