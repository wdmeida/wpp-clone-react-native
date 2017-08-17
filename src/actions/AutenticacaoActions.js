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
