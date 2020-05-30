import React from 'react';
import { useAuthStore, StateAuth } from '../store/authStore';
import { NavigationContainer } from '@react-navigation/native';

// rotas
import AuthRouter from './auth.routes';
import AppRouter from './app.routes';

const Routes = () => {
    // state
    const data = useAuthStore((state: StateAuth) => state.data);

    return (
        <NavigationContainer>
            {data ? <AppRouter /> : <AuthRouter />}
        </NavigationContainer>
    );
};

export default Routes;
