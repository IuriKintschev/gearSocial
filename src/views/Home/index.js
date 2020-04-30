//@flow

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.Text}>Home</Text>
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
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Home;
