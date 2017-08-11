import React from 'react';
import { 
  Button, 
  StyleSheet, 
  Text, 
  TextInput,
  View
 } from 'react-native';

export default props => (
  <View style={styles.container} >
    <View style={styles.titleView}>
      <Text style={styles.title}>WhatsApp Clone</Text>
    </View>
    <View style={styles.inputView}>
      <TextInput style={styles.input} placeholder='E-mail' />
      <TextInput style={styles.input} placeholder='Senha' />
      <Text style={styles.textLink}>Ainda não tem cadastro? Cadastre-se</Text>
    </View>
    <View style={styles.buttonView}>
      <Button style={styles.button} title='Acessar' onPress={() => false} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  titleView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 25
  },
  inputView: {
    flex: 2
  },
  input: {
    fontSize: 20,
    height: 45
  },
  textLink: {
    fontSize: 20
  },
  buttonView: {
    flex: 2
  },
  button: {
    color: '#115E54'
  }
});
