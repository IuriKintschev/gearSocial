import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import api from '../../../services/api';
import Snackbar from 'react-native-snackbar';

import { loadSuccessSingIn, loadFailureSingIn } from './actions';
import { TypesSingIn, TypesSingnUp, DataSingIn } from './types';

import { StateProps } from '../../index';
type PayloadSinReq = {
    payload: {
        data: DataSingIn,
    },
};

// unique selector
const stateAuth = (state: StateProps) => state.auth;

function* singInRequest({ payload }: PayloadSinReq) {
    const authState = yield select(stateAuth);
    console.log(authState.host);

    try {
        const res = yield call(api.get, `${authState.host}/users`);

        let controle: boolean = false;
        let dataFinal: DataSingIn = null;
        // validaçao simples de usuario
        res.data.map((data: DataSingIn) => {
            if (
                data.email === payload.data.email &&
                data.password === payload.data.password
            ) {
                controle = true;
                dataFinal = data;
            }
        });

        if (controle) {
            yield put(loadSuccessSingIn(dataFinal));
        } else {
            // action error
            yield put(loadFailureSingIn());

            // dialog
            Snackbar.show({
                text: 'E-mail ou senha incorretos!',
                backgroundColor: '#e66e78',
                duration: Snackbar.LENGTH_LONG,
            });
        }
    } catch (err) {
        console.log(err);
        // action error
        yield put(loadFailureSingIn());

        // dialog
        Snackbar.show({
            text: 'Algum erro aocorreu na consulta a API!',
            backgroundColor: '#e66e78',
            duration: Snackbar.LENGTH_LONG,
        });
    }
}

function* singnUpRequest({ payload }: PayloadSinReq) {
    const authState = yield select(stateAuth);
    try {
        const res = yield call(api.get, `${authState.host}/users`);

        let controle: boolean = false;

        // validaçao simples de usuario
        res.data.map((data: DataSingIn) => {
            if (data.email === payload.data.email) {
                controle = true;
            }
        });

        if (controle) {
            // action error
            yield put(loadFailureSingIn());

            // dialog
            Snackbar.show({
                text: 'Este e-mail já esta cadastrado!',
                backgroundColor: '#e66e78',
                duration: Snackbar.LENGTH_LONG,
            });
        } else {
            const user = yield call(api.post, '/users', payload.data);

            yield put(loadSuccessSingIn(user.data));
        }
    } catch (err) {
        console.log(err);
        // action error
        yield put(loadFailureSingIn());

        // dialog
        Snackbar.show({
            text: 'Algum erro aocorreu na consulta a API!',
            backgroundColor: '#e66e78',
            duration: Snackbar.LENGTH_LONG,
        });
    }
}

export default all([
    takeLatest(TypesSingIn.LOAD_REQUEST, singInRequest),
    takeLatest(TypesSingnUp.LOAD_REQUEST, singnUpRequest),
]);
