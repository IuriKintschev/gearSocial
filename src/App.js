/**
 * @flow
 */

import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { store } from './store';

//  Rota principal
import Router from './routes';

const App = () => {
    React.useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
};

export default App;
