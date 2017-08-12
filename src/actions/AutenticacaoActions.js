export const modificaEmail = texto => {
  return {
    type: 'modifica_email',
    payload: texto 
  };
};

export const modificaSenha = senha => {
  return {
    type: 'modifica_senha',
    payload: senha
  };
};
