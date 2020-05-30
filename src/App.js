/**
 * @flow
 */

import React from 'react';
import { useAuthStore, StateAuth } from './store/authStore';
import SplashScreen from 'react-native-splash-screen';

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

    return <Router />;
};

export default App;
