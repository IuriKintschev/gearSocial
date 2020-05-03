/* eslint-disable no-shadow */
// @flow

import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import ActionSheet from 'react-native-actionsheet';
import Snackbar from 'react-native-snackbar';

// styles, components
import RawSheet from '../RawSheet';

// services
import Api from '../../../services/api';

// types
type Props = {
    bottomSheetRef: React.Ref,
    stateId: Number,
    reloadChild: Function,
};
import { StateProps } from '../../../store';

const BottomSheetAtion = ({
    bottomSheetRef,
    stateId = 0,
    reloadChild,
}: Props) => {
    // hooks
    const state = useSelector((state: StateProps) => state.auth);
    // referencia do formulario
    const formRef = useRef(null);
    const sheetRef = useRef(null);

    // excluindo post
    async function ecluirPost() {
        try {
            await Api.delete(`posts/${stateId}`);
            reloadChild();

            // dialog
            Snackbar.show({
                text: 'Você conseguiu excluir 😧!',
                backgroundColor: '#4eb941',
                duration: Snackbar.LENGTH_LONG,
            });
        } catch (err) {
            // dialog
            Snackbar.show({
                text: 'Não foi possivel postar o seu conteudo!',
                backgroundColor: '#e66e78',
                duration: Snackbar.LENGTH_LONG,
            });
        }
    }

    // editando post
    async function editarPost(data) {
        const { title, content } = data;
        const payload = {
            title,
            content,
            date: new Date().toLocaleString('PT-br'),
            userId: state.data.id,
        };

        try {
            await Api.put(`posts/${stateId}`, payload);

            // abrindo modal
            sheetRef.current.close();

            // reload
            reloadChild();

            // dialog
            Snackbar.show({
                text: 'Você conseguiu editar 😲!',
                backgroundColor: '#4eb941',
                duration: Snackbar.LENGTH_LONG,
            });
        } catch (err) {
            // dialog
            Snackbar.show({
                text: 'Não foi possivel postar o seu conteudo!',
                backgroundColor: '#e66e78',
                duration: Snackbar.LENGTH_LONG,
            });
        }
    }

    // editando post
    async function editar() {
        const res = await Api.get(`posts/${stateId}`);
        const { title, content } = res.data;

        // abrindo modal
        sheetRef.current.open();

        // setando data
        formRef.current.setData({
            title,
            content,
        });
    }

    return (
        <>
            <ActionSheet
                ref={bottomSheetRef}
                title={'O que deseja fazer o com post?'}
                options={['Editar', 'Excluir', 'cancelar']}
                cancelButtonIndex={2}
                destructiveButtonIndex={1}
                onPress={index => {
                    if (index === 0) {
                        // abrindo modal de edicao
                        editar();
                    } else if (index === 1) {
                        // Excluindo um Post
                        ecluirPost();
                    }
                }}
            />
            <RawSheet
                formRef={formRef}
                sheetRef={sheetRef}
                functionSubmit={editarPost}
            />
        </>
    );
};

export default BottomSheetAtion;
