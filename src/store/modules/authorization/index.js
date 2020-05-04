import { Reducer } from 'redux';
import {
    StateSingIn,
    TypesSingIn,
    TypesSingnUp,
    TypesLogout,
    TypesHost,
} from './types';
import produce from 'immer';

const INITIAL_STATE: StateSingIn = {
    data: null,
    loading: false,
    error: false,
    host: 'http://f4145dda.ngrok.io',
};

const reducer: Reducer<StateSingIn> = (state = INITIAL_STATE, action) =>
    produce(state, draft => {
        switch (action.type) {
            case TypesSingIn.LOAD_REQUEST:
                // iciando request

                draft.loading = true;
                break;
            case TypesSingIn.LOAD_SUCCESS:
                // se estiver OK

                draft.loading = false;
                draft.error = false;
                draft.data = action.payload.data;
                break;
            case TypesSingIn.LOAD_FAILURE:
                // case de errado a request

                draft.error = true;
                draft.loading = false;
                draft.data = null;
                break;

            // SingUp
            case TypesSingnUp.LOAD_REQUEST:
                // iciando request

                draft.loading = true;
                break;
            // logout
            case TypesLogout.LOAD_REQUEST:
                // iciando request

                draft.data = null;
                break;
            // set Host
            case TypesHost.LOAD_REQUEST:
                // iciando request

                draft.loading = action.payload.data;
                console.log(draft);

                break;
            default:
                break;
        }
    });

export default reducer;
