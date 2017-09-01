import firebase from 'firebase';
import b64 from 'base-64'; 

import { 
  ADICIONA_CONTATO_ERRO,
  MODIFICA_ADICIONA_CONTATO_EMAIL 
} from './types';

export const modificaAdicionaContatoEmail = texto => {
  return {
    type: MODIFICA_ADICIONA_CONTATO_EMAIL,
    payload: texto
  };
};

export const adicionaContato = email => {
  
  return dispatch => {
    
    const emailB64 = b64.encode(email);
    
    firebase.database().ref(`/contatos/${emailB64}`)
        .once('value') // Verifica uma vez, sem ficar escutando alterações (on()).
        .then(snapshot => {
          if (snapshot.val()) {
            // email
            // Obtém o usuário corrente que esta autenticado.
            const { currentUser } = firebase.auth();
            const emailUsuarioB64 = b64.encode(currentUser.email);

            firebase.database().ref(`/usuario_contatos/${emailUsuarioB64}`)
                .push({ email, nome: 'Nome do contato' })
                .then(() => console.log('Sucesso'))
                .catch(error => console.log(error));
          } else {
            dispatch({ 
              type: ADICIONA_CONTATO_ERRO, 
              payload: 'E-mail informado não corresponde a um usuário válido!' 
            });
          }
        })
        .catch(error => {
          console.log(error.message);
        });
    };
};
