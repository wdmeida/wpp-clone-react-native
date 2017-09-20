import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import { contatosUsuarioFetch } from '../actions/AppActions';

class Contatos extends Component {

  constructor(props) {
    super(props);

    //Verifica se os elementos sofreram alterações.
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    // Clona os registro, pois como são imutáveis, não podem ser alterados e sim ter 
    // o estado evoluído e poder saber se pode renderizar ou não, quanto forem detectadas
    // alterações.
    this.state = { fonteDeDados: ds.cloneWithRows([
      'Registro 1',
      'Registro 2',
      'Registro 3',
      'Registro 4'
    ]) };
  }

  componentWillMount() {
    this.props.contatosUsuarioFetch();
  }

  render() {
    return (
      <ListView
        dataSource={this.state.fonteDeDados}
        renderRow={data => <View><Text>{data}</Text></View>}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const mapStateToProps = state => {
  const contatos = _.map(state.ListaContatosReducer, (val, uid) => {
    return { ...val, uid };
  });
  return {};
};

const mapDispatchToProps = dispatch => bindActionCreators({
  contatosUsuarioFetch
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Contatos);
