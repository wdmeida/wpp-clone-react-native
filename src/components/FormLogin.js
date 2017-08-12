import React from 'react';
import { 
  Button, 
  StyleSheet, 
  Text, 
  TextInput,
  TouchableHighlight,
  View
 } from 'react-native';
 import { Actions } from 'react-native-router-flux';
 import { connect } from 'react-redux';

const formLogin = props => (
  <View style={styles.container} >
    
    <View style={styles.titleView}>
      <Text style={styles.title}>WhatsApp Clone</Text>
    </View>
    
    <View style={styles.inputView}>
      <TextInput value={props.email} style={styles.input} placeholder='E-mail' />
      <TextInput value={props.senha} style={styles.input} placeholder='Senha' />
      <TouchableHighlight onPress={() => Actions.formCadastro()}>
        <Text style={styles.textLink}>Ainda não tem cadastro? Cadastre-se</Text>
      </TouchableHighlight>
    </View>
    
    <View style={styles.buttonView}>
      <Button color='#115E54' title='Acessar' onPress={() => false} />
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
  }
});

const mapStateToProps = state => (
  {
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha
  }
);


export default connect(mapStateToProps)(formLogin);
