//@flow

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// pages
import Home from '../views/Home';

const AppStack = createStackNavigator();

const AppRoutes = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="Home" component={Home} />
    </AppStack.Navigator>
);

export default AppRoutes;
