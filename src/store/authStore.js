/**
 * @flow
 */

import create from 'zustand';
import api from '../services/api';
import {
    setStorage,
    getStorage,
    removeStorage,
} from '../services/asyncStorage';
import Snackbar from 'react-native-snackbar';

// middlewares
import { immer } from './middleware';

// data types
export type DataAuth = {
    id?: Number,
    name?: String,
    email: String,
    password: String,
    img?: String,
};

// state type
export type StateAuth = {
    // state
    data: DataAuth | null,
    loading: Boolean,
    error: Boolean,
    host: String,

    // init store
    initStorePersist(): Void,

    // actions
    setHostState(): Void,
    singinRequest(): Void,
    singoutRequest(): Void,
    logoutRequest(): Void,

    //requests status
    requestFailure(): Void,
    requestSuccess(): Void,

    // sagas
    singinSagaVerify(): Void,
    singoutSagaVerify(): Void,
};

export const [useAuthStore] = create(
    immer(
        (set, get): StateAuth => ({
            /**
             * STATE ==================================================
             */
            data: null,
            error: false,
            host: '',
            loading: false,

            /**
             * ACTIONS ==================================================
             */
            setHostState: data =>
                set((state: StateAuth) => {
                    state.host = data;
                }), // set host state

            singinRequest: data => {
                set((state: StateAuth) => {
                    state.loading = true;
                });

                get().singinSagaVerify(data);
            }, // init request on singin

            singoutRequest: data => {
                set((state: StateAuth) => {
                    state.loading = true;
                });

                get().singoutSagaVerify(data);
            },

            logoutRequest: async () => {
                //persist data remove
                const resBool = await removeStorage('@gearSocialUser');

                if (resBool) {
                    set((state: StateAuth) => {
                        state.data = null;
                    });
                }
            }, // logout app

            /**
             * STATUS REQUESTS =============================================
             */
            requestFailure: error => {
                set((state: StateAuth) => {
                    state.loading = false;
                    state.error = true;
                    state.data = null;
                });

                // dialog
                setTimeout(() => {
                    Snackbar.show({
                        text: error,
                        backgroundColor: '#e66e78',
                        duration: Snackbar.LENGTH_LONG,
                    });
                }, 1000);
            }, // Failure to request on singin

            requestSuccess: async data => {
                console.log('====================================');
                console.log(data);
                console.log('====================================');
                //persist data
                const resBool = await setStorage(data, '@gearSocialUser');

                if (resBool) {
                    set((state: StateAuth) => {
                        state.loading = false;
                        state.error = true;
                        state.data = data;
                    });
                }
            }, // Success to request on singin

            /**
             * SAGAS ==================================================
             */
            singinSagaVerify: async (data: {
                email: String,
                password: String,
            }) => {
                try {
                    const res = await api.get(`${get().host}/users`);

                    let controle: boolean = false;
                    let dataFinal: DataSingIn = null;
                    // validaçao simples de usuario
                    res.data.map((ma: DataSingIn) => {
                        if (
                            ma.email === data.email &&
                            ma.password === data.password
                        ) {
                            controle = true;
                            dataFinal = ma;
                        }
                    });

                    if (controle) {
                        // action success
                        get().requestSuccess(dataFinal);
                    } else {
                        // action failure
                        get().requestFailure('E-mail ou senha incorretos!');
                    }
                } catch (error) {
                    get().requestFailure(
                        'Algum erro aocorreu na consulta a API!',
                    );
                }
            }, // saga request singin

            singoutSagaVerify: async (data: {
                email: String,
                name: String,
                password: String,
            }) => {
                try {
                    const res = await api.get(`${get().host}/users`);

                    let controle: boolean = false;

                    // validaçao simples de usuario
                    res.data.map((ma: DataSingIn) => {
                        if (ma.email === data.email) {
                            controle = true;
                        }
                    });

                    if (controle) {
                        // action error
                        get().requestFailure('Este e-mail já esta cadastrado!');
                    } else {
                        const user = await api.post(
                            `${get().host}/users`,
                            data,
                        );

                        // // action success
                        get().requestSuccess(user.data);
                    }
                } catch (error) {
                    // action error
                    get().requestFailure(
                        'Algum erro aocorreu na consulta a API!',
                    );
                }
            }, // saga request singout

            /**
             * PERSIST ==================================================
             */

            initStorePersist: async () => {
                const value = await getStorage('@gearSocialUser');

                if (value !== null) {
                    // set persist
                    set((state: StateAuth) => {
                        state.data = value;
                    });
                }
            },
        }),
    ),
);
