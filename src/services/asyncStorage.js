//@flow

import AsyncStorage from '@react-native-community/async-storage';
import Snackbar from 'react-native-snackbar';

export const setHost = async (host: String) => {
    try {
        await AsyncStorage.setItem('@host', host);

        // dialog
        Snackbar.show({
            text: 'Host adicionado com sucesso!',
            backgroundColor: '#4eb941',
            duration: Snackbar.LENGTH_LONG,
        });
    } catch (e) {
        // dialog
        Snackbar.show({
            text: 'Algo deu errado no asyncStorage!',
            backgroundColor: '#e66e78',
            duration: Snackbar.LENGTH_LONG,
        });
    }
};

export const getHost = async () => {
    try {
        const value = await AsyncStorage.getItem('@host');
        if (value !== null) {
            return value;
        } else {
            // dialog
            Snackbar.show({
                text: 'Não possue host, configure na engrenagem!',
                backgroundColor: '#e66e78',
                duration: Snackbar.LENGTH_LONG,
            });
        }
    } catch (e) {
        // dialog
        Snackbar.show({
            text: 'Algo deu errado no asyncStorage!',
            backgroundColor: '#e66e78',
            duration: Snackbar.LENGTH_LONG,
        });
    }
};
