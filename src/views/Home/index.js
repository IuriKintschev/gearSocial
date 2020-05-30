//@flow

// import modules
import React, { useRef, useState } from 'react';
import shallow from 'zustand/shallow';
import { useAuthStore, StateAuth } from '../../store/authStore';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Snackbar from 'react-native-snackbar';

// services
import { postRequest } from '../../services/post';

// helpers
import { getDate } from '../../helpers/dateToScreen';

// styles, components
import { LabelText, LabelView, HeaderView, ButtonHeader } from './styles';
import ScrolledView from '../components/ScrolledView';
import RawSheet from '../components/RawSheet';

const Home = () => {
    // states
    const [host, data] = useAuthStore(
        (state: StateAuth) => [state.host, state.data],
        shallow,
    );
    const [reloadExterno, setReloadExterno] = useState(false);

    // referencia do formulario
    const formRef = useRef(null);
    const sheetRef = useRef(null);

    // post request
    async function postar({ title, content }) {
        const payload = {
            title,
            content,
            date: getDate(),
            userId: data.id,
        };

        try {
            // reset unform
            formRef.current.clearField();
            sheetRef.current.close();

            // service postar
            await postRequest(host, payload);

            // reload posts feed
            setReloadExterno(!reloadExterno);

            // dialog
            Snackbar.show({
                text: 'Conteudo postado 😁',
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
        <>
            <ScrolledView
                urlApi={`${host}/posts?_expand=user`}
                reloadExterno={reloadExterno}
                itemHeader={
                    <HeaderView>
                        <LabelView>
                            <LabelText>Gear Feed</LabelText>
                        </LabelView>
                        <ButtonHeader onPress={() => sheetRef.current.open()}>
                            <Icon name="send" size={30} color="#22b5f9" />
                        </ButtonHeader>
                    </HeaderView>
                }
            />
            <RawSheet
                functionSubmit={postar}
                formRef={formRef}
                sheetRef={sheetRef}
            />
        </>
    );
};

export default Home;
