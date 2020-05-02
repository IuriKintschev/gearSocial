// @flow

import React from 'react';
import ActionSheet from 'react-native-actionsheet';

type Props = {
    bottomSheetRef: React.Ref,
    stateId: Number,
};

const BottomSheetAtion = ({ bottomSheetRef, stateId = 0 }: Props) => {
    return (
        <ActionSheet
            ref={bottomSheetRef}
            title={'O que deseja fazer o com post?'}
            options={['Editar', 'Excluir', 'cancelar']}
            cancelButtonIndex={2}
            destructiveButtonIndex={1}
            onPress={index => {
                /* do something */
            }}
        />
    );
};

export default BottomSheetAtion;
