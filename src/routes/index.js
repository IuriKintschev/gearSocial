import React from 'react';
import { useAuthStore, StateAuth } from '../store/authStore';

// rotas
import AuthRouter from './auth.routes';
import AppRouter from './app.routes';

const Routes = () => {
    // state
    const data = useAuthStore((state: StateAuth) => state.data);

    return data ? <AppRouter /> : <AuthRouter />;
};

export default Routes;
