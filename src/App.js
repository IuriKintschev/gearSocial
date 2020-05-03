/**
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

//  Rota principal
import Router from './routes';

const App = () => (
    <Provider store={store}>
        <Router />
    </Provider>
);

export default App;
