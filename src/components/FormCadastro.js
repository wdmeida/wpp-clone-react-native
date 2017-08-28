import React, { Component } from 'react';
import { 
  Button, 
  Image, 
  StyleSheet, 
  Text, 
  TextInput,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { 
  cadastraUsuario, 
  modificaEmail, 
  modificaNome, 
  modificaSenha 
} from '../actions/AutenticacaoActions';

const backgroundImage = require('../imgs/bg.png');

class FormCadastro extends Component {
  
  _cadastraUsuario() {
    const { nome, email, senha } = this.props;

    this.props.cadastraUsuario({ nome, email, senha });
  }
  
  render() {
    return (
      <Image style={styles.imageContainer} source={backgroundImage}>
        <View style={styles.container}>
          <View style={styles.inputView}>
            <TextInput 
              value={this.props.nome} style={styles.input} placeholderTextColor='#fff'
              placeholder='Nome' onChangeText={nome => this.props.modificaNome(nome)} 
            />
            <TextInput 
              value={this.props.email} style={styles.input} placeholderTextColor='#fff'
              placeholder='E-mail' onChangeText={texto => this.props.modificaEmail(texto)} 
            />
            <TextInput 
              secureTextEntry value={this.props.senha} style={styles.input} 
              placeholderTextColor='#fff' placeholder='Senha' 
              onChangeText={senha => this.props.modificaSenha(senha)} 
            />
            <Text style={styles.textError}>{this.props.erroCadastro}</Text>
          </View>
          <View style={styles.buttonView}>
            <Button 
              title='Cadastrar' color='#115E54' 
              onPress={() => this._cadastraUsuario()} 
            />
          </View>
        </View>
      </Image>
    );
  }
}

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
  textError: {
    color: '#ff0000',
    fontSize: 18
  },
  buttonView: {
    flex: 1
  }
});

const mapStateToProps = state => ({
  nome: state.AutenticacaoReducer.nome,
  email: state.AutenticacaoReducer.email,
  senha: state.AutenticacaoReducer.senha,
  erroCadastro: state.AutenticacaoReducer.erroCadastro
});

const mapDispatchToProps = dispatch => bindActionCreators({ 
  cadastraUsuario, modificaEmail, modificaNome, modificaSenha 
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FormCadastro);
