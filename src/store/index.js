import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import persistReducer from './persistReducer';

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

const store = createStore(persistReducer(reducers), composer);

sagaMiddleware.run(sagas);

const persistor = persistStore(store);

export { store, persistor };
