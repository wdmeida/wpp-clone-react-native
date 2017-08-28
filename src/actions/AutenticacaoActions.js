import firebase from 'firebase';

export const modificaEmail = texto => (
  {
    type: 'modifica_email',
    payload: texto 
  }
);

export const modificaSenha = senha => (
  {
    type: 'modifica_senha',
    payload: senha
  }
);

export const modificaNome = nome => (
  {
    type: 'modifica_nome',
    payload: nome
  }
);

export const cadastraUsuario = ({ nome, email, senha }) => {
  return dispatch => {
    firebase.auth().createUserWithEmailAndPassword(email, senha)
                    .then(() => cadastroUsuarioSucesso(dispatch))
                    .catch(error => cadastroUsuarioErro(error, dispatch));
  };
};

const cadastroUsuarioSucesso = (dispatch) => {
  dispatch({ type: 'sucesso' });
};

const cadastroUsuarioErro = (erro, dispatch) => {
  dispatch({ type: 'cadastro_usuario_erro', payload: erro.message });
};
