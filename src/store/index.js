import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// roots
import reducers from './modules/rootReducer';
import sagas from './modules/rootSagas';

// types
import { StateSingIn } from './modules/authorization/types';

/**
 * Types Redux geral
 */
export type StateProps = {
    auth: StateSingIn,
};

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

const composer = compose(applyMiddleware(...middlewares));

const store = createStore(reducers, composer);

sagaMiddleware.run(sagas);

export default store;
