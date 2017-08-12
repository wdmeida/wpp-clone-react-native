import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { connect } from 'react-redux';

const formCadastro = props => (
  <View style={styles.container}>
    <View style={styles.inputView}>
      <TextInput value={props.nome} style={styles.input} placeholder='Nome' />
      <TextInput value={props.email} style={styles.input} placeholder='E-mail' />
      <TextInput value={props.email} style={styles.input} placeholder='Senha' />
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

const mapStateToProps = (state) => ({
  nome: state.AutenticacaoReducer.nome,
  email: state.AutenticacaoReducer.email,
  senha: state.AutenticacaoReducer.senha
});

export default connect(mapStateToProps)(formCadastro);
