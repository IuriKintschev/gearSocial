//@flow

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// pages
import Singin from '../views/Singin';
import SingnOut from '../views/SingnOut';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
    <AuthStack.Navigator headerMode={'none'}>
        <AuthStack.Screen name="Singin" component={Singin} />
        <AuthStack.Screen name="SingnOut" component={SingnOut} />
    </AuthStack.Navigator>
);

export default AuthRoutes;
