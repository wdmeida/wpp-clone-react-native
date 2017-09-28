import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';

import { 
  CADASTRO_EM_ANDAMENTO,
  CADASTRO_USUARIO_ERRO,
  CADASTRO_USUARIO_SUCESSO,
  LOGIN_EM_ANDAMENTO,  
  LOGIN_USUARIO_ERRO,  
  LOGIN_USUARIO_SUCESSO,
  MODIFICA_EMAIL,
  MODIFICA_NOME,
  MODIFICA_SENHA
 } from './types';

export const modificaEmail = texto => (
  {
    type: MODIFICA_EMAIL,
    payload: texto 
  }
);

export const modificaSenha = senha => (
  {
    type: MODIFICA_SENHA,
    payload: senha
  }
);

export const modificaNome = nome => (
  {
    type: MODIFICA_NOME,
    payload: nome
  }
);

export const cadastraUsuario = ({ nome, email, senha }) => {
  return dispatch => {

    dispatch({ type: CADASTRO_EM_ANDAMENTO });

    firebase.auth().createUserWithEmailAndPassword(email, senha)
          .then(user => {
            const emailB64 = b64.encode(email);
            
            firebase.database().ref(`/contatos/${emailB64}`)
                .push({ nome })
                .then(() => cadastroUsuarioSucesso(dispatch));
          })
          .catch(error => cadastroUsuarioErro(error, dispatch));
  };
};

const cadastroUsuarioSucesso = (dispatch) => {
  dispatch({ type: CADASTRO_USUARIO_SUCESSO });
  // Navigated from the next scene.
  Actions.boasVindas();
};

const cadastroUsuarioErro = (erro, dispatch) => {
  dispatch({ type: CADASTRO_USUARIO_ERRO, payload: erro.message });
};

export const autenticarUsuario = ({ email, senha }) => {
  return dispatch => {
    dispatch({ type: LOGIN_EM_ANDAMENTO });
    
    firebase.auth().signInWithEmailAndPassword(email, senha)
          .then(() => loginUsuarioSucesso(dispatch))
          .catch(erro => loginUsuarioErro(erro, dispatch));
  };
};

const loginUsuarioSucesso = (dispatch) => {
  dispatch({ type: LOGIN_USUARIO_SUCESSO });
  
  Actions.principal();
};

const loginUsuarioErro = (erro, dispatch) => {
  dispatch({ type: LOGIN_USUARIO_ERRO, payload: erro.message });
};
