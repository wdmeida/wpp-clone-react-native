import React, { Component } from 'react';
import {
  Image,
  StyleSheet, 
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import {
  conversaUsuarioFetch, 
  enviarMensagem, 
  modificaMensagem 
} from '../actions/AppActions';

const ENVIAR_MENSAGEM_IMG = require('../imgs/enviar_mensagem.png');

class Conversa extends Component {

  componentWillMount() {
    this.props.conversaUsuarioFetch(this.props.contatoEmail);
  }

  _enviarMensagem() {
    const { mensagem, contatoNome, contatoEmail } = this.props;
    this.props.enviarMensagem(mensagem, contatoNome, contatoEmail);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewList}>
          <Text>Lista</Text>
        </View>
        
        <View style={styles.viewActions}>
          <TextInput
            value={this.props.mensagem}
            onChangeText={texto => this.props.modificaMensagem(texto)}
            style={styles.textInput}
          />
          <TouchableHighlight 
            onPress={this._enviarMensagem.bind(this)} 
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

const mapStateToProps = state => {
  const conversa = _.map(state.ListaConversaReducer, (val, uid) => {
    return { ...val, uid };
  });
  
  return ({
    conversa,        
    mensagem: state.AppReducer.mensagem
  });
};

const mapDispatchToProps = dispatch => bindActionCreators({
  conversaUsuarioFetch, enviarMensagem, modificaMensagem
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Conversa);
