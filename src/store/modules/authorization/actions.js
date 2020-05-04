import {
    TypesSingnUp,
    TypesSingIn,
    DataSingIn,
    TypesLogout,
    TypesHost,
} from './types';

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

/**
 * Action Logout
 */
export function loadLogout() {
    return {
        type: TypesLogout.LOAD_REQUEST,
    };
}

/**
 * Adicionando host
 */
export function loadHost(data: String) {
    return {
        type: TypesHost.LOAD_REQUEST,
        payload: { data },
    };
}
