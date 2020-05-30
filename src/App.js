/**
 * @flow
 */

import React from 'react';
import SplashScreen from 'react-native-splash-screen';

//  Rota principal
import Router from './routes';

const App = () => {
    React.useEffect(() => {
        SplashScreen.hide();
    }, []);

    return <Router />;
};

export default App;
