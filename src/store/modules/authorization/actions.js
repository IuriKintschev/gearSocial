import { TypesSingIn, DataSingIn } from './types';

// request singIn
export function loadResquestSingIn(data: DataSingIn) {
    return {
        type: TypesSingIn.LOAD_REQUEST,
        payload: { data },
    };
}

export function loadSuccessSingIn(data: DataSingIn) {
    return {
        type: TypesSingIn.LOAD_SUCCESS,
        payload: { data },
    };
}

export function loadFailureSingIn() {
    return {
        type: TypesSingIn.LOAD_FAILURE,
    };
}
