import { TypesSingnUp, TypesSingIn, DataSingIn } from './types';

/**
 * actions singnIn
 */
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

/**
 * actions singnUp
 */

export function loadResquestSingnUp(data: DataSingIn) {
    return {
        type: TypesSingnUp.LOAD_REQUEST,
        payload: { data },
    };
}
