import { 
  ADICIONA_CONTATO_ERRO,
  MODIFICA_ADICIONA_CONTATO_EMAIL 
} from '../actions/types';

const INITIAL_STATE = {
  adicionaContatoEmail: '',
  cadastroErro: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODIFICA_ADICIONA_CONTATO_EMAIL:
      return { ...state, adicionaContatoEmail: action.payload }
    case ADICIONA_CONTATO_ERRO:
      return { ...state, cadastroErro: action.payload };
    default:
      return state;
  }
};
