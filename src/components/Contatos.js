import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { contatosUsuarioFetch } from '../actions/AppActions';

class Contatos extends Component {

  componentWillMount() {
    this.props.contatosUsuarioFetch();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Contatos</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const mapDispatchToProps = dispatch => bindActionCreators({
  contatosUsuarioFetch
}, dispatch);

export default connect(null, mapDispatchToProps)(Contatos);
