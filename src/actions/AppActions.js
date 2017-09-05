import firebase from 'firebase';
import b64 from 'base-64';
import _ from 'lodash';

import { 
  ADICIONA_CONTATO_ERRO,
  ADICIONA_CONTATO_SUCESSO,
  MODIFICA_ADICIONA_CONTATO_EMAIL 
} from './types';

export const modificaAdicionaContatoEmail = texto => (
  {
    type: MODIFICA_ADICIONA_CONTATO_EMAIL,
    payload: texto
  }
);

export const adicionaContato = email => {
  
  return dispatch => {
    
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
    };
};

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
