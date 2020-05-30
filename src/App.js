/**
 * @flow
 */

import React from 'react';
import { useAuthStore, StateAuth } from './store/authStore';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';

//  Rota principal
import Router from './routes';

const App = () => {
    //state
    const initStorePersist = useAuthStore(
        (state: StateAuth) => state.initStorePersist,
    );

    React.useEffect(() => {
        async function initVerify() {
            await initStorePersist();
            SplashScreen.hide();
        }

        initVerify();
    }, [initStorePersist]);

    return (
        <NavigationContainer>
            <Router />
        </NavigationContainer>
    );
};

export default App;
