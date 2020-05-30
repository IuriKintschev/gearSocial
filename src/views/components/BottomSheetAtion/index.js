// @flow

import React, { useRef } from 'react';
import shallow from 'zustand/shallow';
import { useAuthStore, StateAuth } from '../../../store/authStore';
import ActionSheet from 'react-native-actionsheet';
import Snackbar from 'react-native-snackbar';

// styles, components
import RawSheet from '../RawSheet';

// services
import { excluirPost, editarPost, postPorId } from '../../../services/post';

// types
type Props = {
    bottomSheetRef: React.Ref,
    stateId: Number,
    reloadChild: Function,
};

const BottomSheetAtion = ({
    bottomSheetRef,
    stateId = 0,
    reloadChild,
}: Props) => {
    // hooks
    const [host, data] = useAuthStore(
        (state: StateAuth) => [state.host, state.data],
        shallow,
    );

    // referencia do formulario
    const formRef = useRef(null);
    const sheetRef = useRef(null);

    // excluindo post
    async function ecluirPost() {
        try {
            // service exclusao
            await excluirPost(host, stateId);

            // reload posts
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
    async function editandoPosts({ title, content }) {
        const payload = {
            title,
            content,
            date: new Date().toLocaleString('PT-br'),
            userId: data.id,
        };

        try {
            // abrindo modal
            sheetRef.current.close();

            // service editar posts
            await editarPost(host, payload, stateId);

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
        const res = await postPorId(host, stateId);
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
                functionSubmit={editandoPosts}
            />
        </>
    );
};

export default BottomSheetAtion;
