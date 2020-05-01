//@flow

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { StateProps } from '../../store';

// import { Container } from './styles';

const Home = () => {
    // eslint-disable-next-line no-shadow
    const state = useSelector((state: StateProps) => state.auth);
    return (
        <View style={styles.container}>
            <Text style={styles.Text}>{state.data?.name}</Text>
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

export default Home;
