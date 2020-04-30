import { all } from 'redux-saga/effects';

// sagas
import auth from './authorization/sagas';

export default function* rootSaga() {
    return yield all([auth]);
}
