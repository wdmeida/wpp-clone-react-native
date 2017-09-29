import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import { contatosUsuarioFetch } from '../actions/AppActions';

class Contatos extends Component {

  componentWillMount() {
    this.props.contatosUsuarioFetch();
    this.criaFonteDeDados(this.props.contatos);
  }

  componentWillReceiveProps(nextProps) {
    this.criaFonteDeDados(nextProps.contatos);
  }

  criaFonteDeDados(contatos) {
    //Verifica se os elementos sofreram alterações.
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    
    // Clona os registro, pois como são imutáveis, não podem ser alterados e sim ter 
    // o estado evoluído e poder saber se pode renderizar ou não, quanto forem detectadas
    // alterações.
    this.fonteDeDados = ds.cloneWithRows(contatos);
  }

  renderRow(contato) {
    return (
      <TouchableHighlight
        onPress={() => Actions.conversa()}  
      >
        <View style={styles.itemContainer}>
          <Text style={styles.nameStyle}>{contato.nome}</Text>
         <Text style={styles.emailStyle}>{contato.email}</Text>
       </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.fonteDeDados}
        renderRow={this.renderRow} //data => this.renderRow(data)
      />
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#CCC'
  },
  nameStyle: {
    fontSize: 25
  },
  emailStyle: {
    fontSize: 18
  }
});

const mapStateToProps = state => {
  const contatos = _.map(state.ListaContatosReducer, (val, uid) => {
    return { ...val, uid };
  });
  return { contatos };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  contatosUsuarioFetch
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Contatos);
