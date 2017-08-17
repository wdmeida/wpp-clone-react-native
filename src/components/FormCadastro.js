import React from 'react';
import { Button, Image, StyleSheet, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { modificaEmail, modificaNome, modificaSenha } from '../actions/AutenticacaoActions';

const backgroundImage = require('../imgs/bg.png');

const formCadastro = props => (
  <Image style={styles.imageContainer} source={backgroundImage}>
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput 
          value={props.nome} style={styles.input} placeholderTextColor='#fff'
          placeholder='Nome' onChangeText={nome => props.modificaNome(nome)} 
        />
        <TextInput 
          value={props.email} style={styles.input} placeholderTextColor='#fff'
          placeholder='E-mail' onChangeText={texto => props.modificaEmail(texto)} 
        />
        <TextInput 
          secureTextEntry value={props.senha} style={styles.input} placeholderTextColor='#fff'
          placeholder='Senha' onChangeText={senha => props.modificaSenha(senha)} 
        />
      </View>
      <View style={styles.buttonView}>
        <Button title='Cadastrar' color='#115E54' onPress={() => false} />
      </View>
    </View>
  </Image>
);

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: null
  },
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

const mapStateToProps = state => ({
  nome: state.AutenticacaoReducer.nome,
  email: state.AutenticacaoReducer.email,
  senha: state.AutenticacaoReducer.senha
});

const mapDispatchToProps = dispatch => bindActionCreators({ 
  modificaEmail, modificaNome, modificaSenha 
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(formCadastro);
