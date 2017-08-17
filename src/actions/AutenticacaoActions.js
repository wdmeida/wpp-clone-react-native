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
  
  firebase.auth().createUserWithEmailAndPassword(email, senha)
      .then(() => cadastroUsuarioSucesso())
      .catch(error => cadastroUsuarioErro(error));

  return {
    type: 'teste'
  };
};

 const cadastroUsuarioSucesso = () => {
   console.log('Usuário cadastrado!');
 };

 const cadastroUsuarioErro = (erro) => {
   console.log(erro);
 }