import { MODIFICA_ADICIONA_CONTATO_EMAIL } from '../actions/types';

const INITIAL_STATE = {
  adicionaContatoEmail: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODIFICA_ADICIONA_CONTATO_EMAIL:
      return { ...state, adicionaContatoEmail: action.payload }
    default:
      return state;
  }
};
