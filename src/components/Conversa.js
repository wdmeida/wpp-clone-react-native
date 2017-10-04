import React, { Component } from 'react';
import {
  ListView,
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
    this.criaFonteDeDados(this.props.conversa);
  }

  componentWillReceiveProps(nextProps) {
    this.criaFonteDeDados(nextProps.conversa);
  }

  criaFonteDeDados(conversa) {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.dataSource = ds.cloneWithRows(conversa);
  }

  _enviarMensagem() {
    const { mensagem, contatoNome, contatoEmail } = this.props;
    this.props.enviarMensagem(mensagem, contatoNome, contatoEmail);
  }

  renderRow(texto) {
    if (texto.tipo === 'e') {
      return (
        <View style={styles.messageSendView}>
          <Text style={styles.messageSendText}>{texto.mensagem}</Text>
        </View>
      );
    } 
    return (
      <View style={styles.messageReceiveView}>
        <Text style={styles.messageReceiveText}>{texto.mensagem}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewList}>
          <Text>
            <ListView
              enableEmptySections
              dataSource={this.dataSource}
              renderRow={this.renderRow}
            />
          </Text>
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
  },
  messageSendView: {
    alignItems: 'flex-end',
    marginTopo: 5,
    marginBottom: 5,
    marginLeft: 40
  },
  messageSendText: {
    fontSize: 18,
    color: '#000',
    padding: 10,
    backgroundColor: '#DBF5B4',
    elevation: 1
  },
  messageReceiveView: {
    alignItems: 'flex-starg',
    marginTopo: 5,
    marginBottom: 5,
    marginRight: 40
  },
  messageReceiveText: {
    fontSize: 18,
    color: '#000',
    padding: 10,
    backgroundColor: '#F7F7F7',
    elevation: 1
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
