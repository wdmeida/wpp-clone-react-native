import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { 
  adicionaContato,
  modificaAdicionaContatoEmail 
} from '../actions/AppActions';

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
      <Button 
        title='Adicionar' 
        color='#115E54' 
        onPress={() => props.adicionaContato(props.adicionaContatoEmail)} 
      />
      <Text style={styles.textError}>
        {props.cadastroErro}
      </Text>
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
  textError: {
    color: '#ff0000',
    fontSize: 20
  },
  buttonView: {
    flex: 1
  }
});

const mapStateToProps = state => ({
  adicionaContatoEmail: state.AppReducer.adicionaContatoEmail,
  cadastroErro: state.AppReducer.cadastroErro
});

const mapDispatchToProps = dispatch => bindActionCreators({
  adicionaContato, modificaAdicionaContatoEmail
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AdicionarContato);
