import React from 'react';
import { 
  Button,
  StyleSheet, 
  TextInput, 
  View 
} from 'react-native';

export default props => (
  <View style={styles.container}>
    <View style={styles.inputView}>
      <TextInput style={styles.input} placeholder='Nome' />
      <TextInput style={styles.input} placeholder='E-mail' />
      <TextInput style={styles.input} placeholder='Senha' />
    </View>
    <View style={styles.buttonView}>
      <Button title='Cadastrar' color='#115E54' onPress={() => false} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  inputView: {
    flex: 4,
    justifyContent: 'center'
  },
  input: {
    fontSize: 20,
    height: 45
  },
  buttonView: {
    flex: 1
  }
});

