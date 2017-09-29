import React, { Component } from 'react';
import {
  Image,
  StyleSheet, 
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

const ENVIAR_MENSAGEM_IMG = require('../imgs/enviar_mensagem.png');

export default class Conversa extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewList}>
          <Text>Lista</Text>
        </View>
        
        <View style={styles.viewActions}>
          <TextInput
            style={styles.textInput}
          />
          <TouchableHighlight 
            onPress={() => false} 
            underlayColor='#FFF'
          >
            <Image source={ENVIAR_MENSAGEM_IMG} />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#EEE4DC',
    padding: 10
  },
  viewList: {
    flex: 1,
    paddingBottom: 20
  },
  viewActions: {
    flexDirection: 'row',
    height: 60
  },
  textInput: {
    flex: 4,
    backgroundColor: '#FFF',
    fontSize: 18
  }
});
