import createReducer from "../_helpers/create-reducer";
import { filterConstants } from "../_constants";

const INITIAL_STATE = {
    ativo: false,
    open: false,
    search: '',
    dateInit: '',
    dateFinal: '',
    contrato: '',
    contato: '',
    serie: '',
    servico: '',
    usuarioPortal: '',
    parceiroAt: '',
    parceiroAb: '',
    activePage: 1,
    tamPage: 30,
}

export const filterReducer = createReducer(INITIAL_STATE, {
    [filterConstants.CHANGE]: (state, action) => ({ ...state, ...action.payload, ativo: true, activePage: 1 }),
    [filterConstants.CHANGEINPUT]: (state, action) => ({ ...state, search: action.payload, ativo: true, activePage: 1 }),
    [filterConstants.RESET]: () => ({ ...INITIAL_STATE }),
})