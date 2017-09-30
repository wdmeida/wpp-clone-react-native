import firebase from 'firebase';
import b64 from 'base-64';
import _ from 'lodash';

import { 
  ADICIONA_CONTATO_ERRO,
  ADICIONA_CONTATO_SUCESSO,
  LISTA_CONTATO_USUARIO,
  MODIFICA_ADICIONA_CONTATO_EMAIL,
  MODIFICA_MENSAGEM 
} from './types';

export const modificaAdicionaContatoEmail = texto => (
  {
    type: MODIFICA_ADICIONA_CONTATO_EMAIL,
    payload: texto
  }
);

export const adicionaContato = email => (
  dispatch => {
    const emailB64 = b64.encode(email);
    
    firebase.database().ref(`/contatos/${emailB64}`)
        .once('value') // Verifica uma vez, sem ficar escutando alterações (on()).
        .then(snapshot => {
          if (snapshot.val()) {
            // Obtém o nome do usuário do objeto literal recuperado no firebase.
            const dadosUsuario = _.first(_.values(snapshot.val()));
            
            // Obtém o usuário corrente que esta autenticado.
            const { currentUser } = firebase.auth();
            const emailUsuarioB64 = b64.encode(currentUser.email);

            firebase.database().ref(`/usuario_contatos/${emailUsuarioB64}`)
                .push({ email, nome: dadosUsuario.nome })
                  .then(() => adicionaContatoSucesso(dispatch))
                  .catch(erro => adicionaContatoErro(erro.message, dispatch));
          } else {
            dispatch({ 
              type: ADICIONA_CONTATO_ERRO, 
              payload: 'E-mail informado não corresponde a um usuário válido!' 
            });
          }
        });
  }
);

const adicionaContatoErro = (erro, dispatch) => (
  dispatch({
      type: ADICIONA_CONTATO_ERRO, 
      payload: erro 
    })
);

const adicionaContatoSucesso = dispatch => dispatch({ 
  type: ADICIONA_CONTATO_SUCESSO,
  payload: true
});

export const habilitaInclusaoContato = () => ({ 
  type: ADICIONA_CONTATO_SUCESSO,
  payload: false
});

export const contatosUsuarioFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    const emailUsuarioB64 = b64.encode(currentUser.email);

    firebase.database().ref(`/usuario_contatos/${emailUsuarioB64}`)
      .on('value', snapshot => {
        dispatch({ type: LISTA_CONTATO_USUARIO, payload: snapshot.val() });
      });
  };
};

export const modificaMensagem = texto => ({
  type: MODIFICA_MENSAGEM,
  payload: texto
});

export const enviarMensagem = (mensagem, contatoNome, contatoEmail) => {
  //dados do usuario (email)
  const { currentUser } = firebase.auth();
  const usuarioEmail = currentUser.email;

  return dispatch => {
    //conversão para base 64.
    const usuarioEmailB64 = b64.encode(usuarioEmail);
    const contatoEmailB64 = b64.encode(contatoEmail);

    firebase.database().ref(`/mensagens/${usuarioEmailB64}/${contatoEmailB64}`)
      .push({ mensagem, tipo: 'e' })
      .then(() => {
        firebase.database().ref(`/mensagens/${contatoEmailB64}/${usuarioEmailB64}`)
          .push({ mensagem, tipo: 'r' })
          .then(() => dispatch({ type: 'xyz' }));
      })
      .then(() => { //Armazenar o cabeçalho de conversa do usuário autenticado.
        firebase.database().ref(`/usuario_conversas/${usuarioEmailB64}/${contatoEmailB64}`)
          .set({ nome: contatoNome, email: contatoEmail });
      })
      .then(() => { //Armazenar o cabeçalho de conversa do contato.
        firebase.database().ref(`/contatos/${usuarioEmailB64}`)
          .once('value')
          .then(snapshot => {
            //Recupera o primeiro indice do array retornado pelo objeto.
            const dadosUsuario = _.first(_.values(snapshot.val()));

            firebase.database().ref(`/usuario_conversas/${contatoEmailB64}/${usuarioEmailB64}`)
              .set({ nome: dadosUsuario.nome, email: usuarioEmail });
          });
      });
  };
};
