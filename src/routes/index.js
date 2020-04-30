import React from 'react';
import { useSelector } from 'react-redux';
import { StateProps } from '../store';

// rotas
import AuthRouter from './auth.routes';
import AppRouter from './app.routes';

const Routes = () => {
    // eslint-disable-next-line no-shadow
    const state = useSelector((state: StateProps) => state.auth);
    return state.data ? <AppRouter /> : <AuthRouter />;
};

export default Routes;
