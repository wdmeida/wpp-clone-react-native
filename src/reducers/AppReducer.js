import { 
  ADICIONA_CONTATO_ERRO,
  ADICIONA_CONTATO_SUCESSO,
  ENVIA_MENSAGEM_SUCESSO,
  MODIFICA_ADICIONA_CONTATO_EMAIL,
  MODIFICA_MENSAGEM
} from '../actions/types';

const INITIAL_STATE = {
  adicionaContatoEmail: '',
  cadastroErro: '',
  cadastroResultadoInclusao: false,
  mensagem: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADICIONA_CONTATO_ERRO:
      return { ...state, cadastroErro: action.payload };
    case ADICIONA_CONTATO_SUCESSO:
      return { ...state, cadastroResultadoInclusao: action.payload, adicionaContatoEmail: '' };
    case MODIFICA_ADICIONA_CONTATO_EMAIL:
      return { ...state, adicionaContatoEmail: action.payload };
    case MODIFICA_MENSAGEM:
      return { ...state, mensagem: action.payload };
    case ENVIA_MENSAGEM_SUCESSO:
      return { ...state, mensagem: '' };
    default:
      return state;
  }
};
