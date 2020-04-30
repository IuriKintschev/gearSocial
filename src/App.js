/**
 * @flow
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './store';

//  Rota principal
import Router from './routes';

const App = () => (
    <Provider store={store}>
        <NavigationContainer>
            <Router />
        </NavigationContainer>
    </Provider>
);

export default App;
