//@flow

import React, { useState, useEffect } from 'react';
import { useAuthStore, StateAuth } from '../../../store/authStore';
import shallow from 'zustand/shallow';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RBSheet from 'react-native-raw-bottom-sheet';
import Snackbar from 'react-native-snackbar';

import Api from '../../../services/api';

import { Container, Input, InputContainer, ButtonSub } from './styles';

const RawInputApi = ({ refSheet }) => {
    // states e hooks
    const [inputBind, setInputBind] = useState('');
    const [host, setHostState] = useAuthStore(
        (state: StateAuth) => [state.host, state.setHostState],
        shallow,
    );

    // load
    useEffect(() => {
        setInputBind(host);
    }, [host]);

    // testeApi/ setando store
    async function setandoHost() {
        try {
            const res = await Api.get(`${inputBind}/status`);

            if (res.data.tipo === 'ok') {
                // close modal
                refSheet.current.close();

                // mandando para o store
                setHostState(inputBind);
                setTimeout(() => {
                    // dialog
                    Snackbar.show({
                        text: 'Host adicionado com sucesso!',
                        backgroundColor: '#4eb941',
                        duration: Snackbar.LENGTH_LONG,
                    });
                }, 1000);
            }
        } catch (error) {
            // reset campo
            setInputBind('');
            // dialog
            Snackbar.show({
                text: 'Este host nao é valido!',
                backgroundColor: '#e66e78',
                duration: Snackbar.LENGTH_LONG,
            });
        }
    }

    return (
        <RBSheet ref={refSheet} height={90} duration={250}>
            <Container>
                <InputContainer>
                    <Input
                        placeholder="http://localhost:5001"
                        autoCapitalize="none"
                        value={inputBind}
                        onChangeText={setInputBind}
                    />
                </InputContainer>
                <ButtonSub onPress={setandoHost}>
                    <Icon name="add" size={40} color="#4eb941" />
                </ButtonSub>
            </Container>
        </RBSheet>
    );
};

export default RawInputApi;
