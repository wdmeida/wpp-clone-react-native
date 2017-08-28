import React from 'react';
import { 
  Button, 
  Image,
  StyleSheet, 
  View, 
  Text 
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const LOGO = require('../imgs/logo.png');
const BACKGROUND = require('../imgs/bg.png');

export default props => (
  <Image style={styles.imgBackground} source={BACKGROUND}>
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Text style={styles.textMessage}>Seja Bem-vindo!!!</Text>
        <Image source={LOGO} />
      </View>
      <View style={styles.containerButton}>
        <Button title="Fazer Login" onPress={() => Actions.formLogin()} />
      </View>
    </View>
  </Image>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  imgBackground: {
    flex: 1,
    width: null
  },
  containerLogo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textMessage: {
    fontSize: 20,
    color: '#ffffff'
  },
  containerButton: {
    flex: 1
  }
});
