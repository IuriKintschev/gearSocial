import AsyncStorage from '@react-native-community/async-storage';
import Snackbar from 'react-native-snackbar';

/**
 * Set Item to storage
 * @param {Object} value object to persist
 * @param {String} key indetify item storage
 */
export const setStorage: Boolean = async (value: Object, key: String) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);

        return true;
    } catch (e) {
        Snackbar.show({
            text: 'Erro no set Async Storage!',
            backgroundColor: '#e66e78',
            duration: Snackbar.LENGTH_LONG,
        });

        return false;
    }
};

/**
 * Get itam persist storage
 * @param {String} key indetify item storage
 */
export const getStorage: Object = async (key: String) => {
    try {
        const value = await AsyncStorage.getItem(key);

        return value != null ? JSON.parse(value) : null;
    } catch (e) {
        Snackbar.show({
            text: 'Erro no get Async Storage!',
            backgroundColor: '#e66e78',
            duration: Snackbar.LENGTH_LONG,
        });

        return null;
    }
};

/**
 * Remove item storage
 * @param {String} key indentify item storage
 */
export const removeStorage = async (key: String) => {
    try {
        await AsyncStorage.removeItem(key);
        return true;
    } catch (exception) {
        Snackbar.show({
            text: 'Erro ao remover item!',
            backgroundColor: '#e66e78',
            duration: Snackbar.LENGTH_LONG,
        });

        return false;
    }
};
