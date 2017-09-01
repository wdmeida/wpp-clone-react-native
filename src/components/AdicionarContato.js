import React from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { modificaAdicionaContatoEmail } from '../actions/AppActions';

const AdicionarContato = props => (
  <View style={styles.container}>

    <View style={styles.textInputView}>
      <TextInput
        style={styles.textInputEmail} 
        placeholder='E-mail'
        onChange={(texto) => props.modificaAdicionaContatoEmail(texto)}
        value={props.adicionaContatoEmail}
      />
    </View>

    <View style={styles.buttonView}>
      <Button title='Adicionar' color='#115E54' onPress={() => false} />
    </View>

  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  textInputView: {
    flex: 1,
    justifyContent: 'center'
  },
  textInputEmail: {
    fontSize: 20,
    height: 45
  },
  buttonView: {
    flex: 1
  }
});

const mapStateToProps = state => ({
  adicionaContatoEmail: state.AppReducer.adicionaContatoEmail
});

const mapDispatchToProps = dispatch => bindActionCreators({
  modificaAdicionaContatoEmail
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AdicionarContato);
