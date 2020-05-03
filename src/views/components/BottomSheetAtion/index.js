// @flow

import React from 'react';
import ActionSheet from 'react-native-actionsheet';
import Snackbar from 'react-native-snackbar';

// services
import Api from '../../../services/api';

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
    // excluindo post
    async function ecluir() {
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

    return (
        <ActionSheet
            ref={bottomSheetRef}
            title={'O que deseja fazer o com post?'}
            options={['Editar', 'Excluir', 'cancelar']}
            cancelButtonIndex={2}
            destructiveButtonIndex={1}
            onPress={index => {
                if (index === 0) {
                    console.log('editar');
                } else if (index === 1) {
                    // Excluindo um Post
                    ecluir();
                }
            }}
        />
    );
};

export default BottomSheetAtion;
