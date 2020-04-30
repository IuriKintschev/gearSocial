//@flow

import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

export type IconsProps = {
    route: {
        name: string,
    },
    focused: Boolean,
    color: String,
    size: Number,
};

const IconTabNavigator = ({ route, focused, color, size }: IconsProps) => {
    let iconName;

    if (route.name === 'Feed') {
        iconName = focused ? 'line-weight' : 'line-style';
    } else if (route.name === 'Profile') {
        iconName = focused ? 'person' : 'person-outline';
    }
    return <Icon name={iconName} size={size} color={color} />;
};

export default IconTabNavigator;
