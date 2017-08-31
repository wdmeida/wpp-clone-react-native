import React, { Component } from 'react';
import { 
  ActivityIndicator,
  Button, 
  Image, 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableHighlight, 
  View 
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { 
  autenticarUsuario,
  modificaEmail, 
  modificaSenha 
} from '../actions/AutenticacaoActions';

const backgroundImage = require('../imgs/bg.png');


class FormLogin extends Component {

  _autenticarUsuario() {
    const { email, senha } = this.props;

    this.props.autenticarUsuario({ email, senha });
  }

  renderBtnAcessar() {
    if (this.props.loadingLogin) {
      return (
        <ActivityIndicator size='large' />
      );
    }
    return (
      <Button color='#115E54' title='Acessar' onPress={() => this._autenticarUsuario()} />
    );
  }
  
  render() {
    return (
      <Image style={styles.imageContainer} source={backgroundImage}>  
        <View style={styles.container}>         
          <View style={styles.titleView}>
            <Text style={styles.title}>WhatsApp Clone</Text>
          </View>
          <View style={styles.inputView}>
            <TextInput 
              value={this.props.email} 
              style={styles.input} 
              placeholderTextColor='#fff'
              placeholder='E-mail' 
              onChangeText={texto => this.props.modificaEmail(texto)} 
            />
            <TextInput 
              secureTextEntry 
              value={this.props.senha} 
              style={styles.input} 
              placeholderTextColor='#fff'
              placeholder='Senha' 
              onChangeText={senha => this.props.modificaSenha(senha)}
            />
            <Text style={styles.erroLogin}>
              {this.props.erroLogin}
            </Text>
            <TouchableHighlight onPress={() => Actions.formCadastro()}>
              <Text style={styles.textLink}>Ainda não tem cadastro? Cadastre-se</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.buttonView}>
            {this.renderBtnAcessar()}
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
  titleView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 25,
    color: '#fff'
  },
  inputView: {
    flex: 2
  },
  input: {
    fontSize: 20,
    height: 45
  },
  erroLogin: {
    color: '#ff0000',
    fontSize: 18
  },
  textLink: {
    fontSize: 20,
    color: '#fff'
  },
  buttonView: {
    flex: 2
  }
});

const mapStateToProps = state => (
  {
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha,
    erroLogin: state.AutenticacaoReducer.erroLogin,
    loadingLogin: state.AutenticacaoReducer.loadingLogin
  }
);

const mapDispatchToProps = dispatch => bindActionCreators({ 
  autenticarUsuario, modificaEmail, modificaSenha 
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);
