//@flow

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

const Profile = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.Text}>Profile</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Text: {
        color: '#222',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Profile;
