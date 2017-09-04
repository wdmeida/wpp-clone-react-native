import React, { Component } from 'react';
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

class AdicionarContato extends Component {
  
  renderAdicionaContato() {
    if (!this.props.cadastroResultadoInclusao) {
      return (

        <View style={styles.containerRenderAdicionaContatos}>
          <View style={styles.textInputView}>
            <TextInput
              style={styles.textInputEmail} 
              placeholder='E-mail'
              onChange={(texto) => this.props.modificaAdicionaContatoEmail(texto)}
              value={this.props.adicionaContatoEmail}
            />
          </View>

          <View style={styles.buttonView}>
            <Button 
              title='Adicionar' 
              color='#115E54' 
              onPress={() => this.props.adicionaContato(this.props.adicionaContatoEmail)} 
            />
            <Text style={styles.textError}>
              {this.props.cadastroErro}
            </Text>
          </View>
        </View>
      );
    } 
      
    return (
        <View>
          <Text style={styles.textCadastroSucesso}>
            Cadastro realizado com sucesso!
          </Text>
        </View>
      );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderAdicionaContato()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  containerRenderAdicionaContatos: {
    flex: 1
  },
  textCadastroSucesso: {
    fontSize: 20
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
  cadastroErro: state.AppReducer.cadastroErro,
  cadastroResultadoInclusao: state.AppReducer.cadastroResultadoInclusao
});

const mapDispatchToProps = dispatch => bindActionCreators({
  adicionaContato, modificaAdicionaContatoEmail
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AdicionarContato);
