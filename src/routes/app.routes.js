//@flow

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabIcon from '../views/components/IconTabNavigator';

// pages
import Home from '../views/Home';
import Profile from '../views/Profile';

const AppTab = createBottomTabNavigator();

const AppRoutes = () => (
    <AppTab.Navigator
        initialRouteName="Feed"
        // stando icones na tab bar
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => (
                <TabIcon
                    color={color}
                    focused={focused}
                    route={route}
                    size={size}
                />
            ),
        })}
        // definino cores dos icones
        tabBarOptions={{
            activeTintColor: '#ff6781',
            inactiveTintColor: '#666',
        }}>
        <AppTab.Screen name="Feed" component={Home} />
        <AppTab.Screen name="Profile" component={Profile} />
    </AppTab.Navigator>
);

export default AppRoutes;
