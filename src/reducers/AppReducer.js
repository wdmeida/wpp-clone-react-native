import { 
  ADICIONA_CONTATO_ERRO,
  ADICIONA_CONTATO_SUCESSO,
  MODIFICA_ADICIONA_CONTATO_EMAIL 
} from '../actions/types';

const INITIAL_STATE = {
  adicionaContatoEmail: '',
  cadastroErro: '',
  cadastroResultadoInclusao: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODIFICA_ADICIONA_CONTATO_EMAIL:
      return { ...state, adicionaContatoEmail: action.payload }
    case ADICIONA_CONTATO_ERRO:
      return { ...state, cadastroErro: action.payload };
    case ADICIONA_CONTATO_SUCESSO:
      return { ...state, cadastroResultadoInclusao: true };
    default:
      return state;
  }
};
