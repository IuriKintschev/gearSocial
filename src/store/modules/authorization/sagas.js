import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import Snackbar from 'react-native-snackbar';

import { loadSuccessSingIn, loadFailureSingIn } from './actions';
import { TypesSingIn, DataSingIn } from './types';

type PayloadSinReq = {
    payload: {
        data: DataSingIn,
    },
};

function* singInRequest({ payload }: PayloadSinReq) {
    try {
        const res = yield call(api.get, '/users');

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

export default all([takeLatest(TypesSingIn.LOAD_REQUEST, singInRequest)]);
