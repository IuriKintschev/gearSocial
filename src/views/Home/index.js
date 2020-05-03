//@flow

// import modules
import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Snackbar from 'react-native-snackbar';

// services
import Api from '../../services/api';

// styles, components
import { LabelText, LabelView, HeaderView, ButtonHeader } from './styles';
import ScrolledView from '../components/ScrolledView';
import RawSheet from '../components/RawSheet';

// types
import { StateProps } from '../../store';

const Home = () => {
    // states
    // eslint-disable-next-line no-shadow
    const state = useSelector((state: StateProps) => state.auth);
    const [reloadExterno, setReloadExterno] = useState(false);

    // referencia do formulario
    const formRef = useRef(null);
    const sheetRef = useRef(null);

    // post request
    async function postRequest(data) {
        const { title, content } = data;
        const payload = {
            title,
            content,
            date: new Date().toLocaleString('PT-br'),
            userId: state.data.id,
        };

        try {
            await Api.post('posts', payload);
            formRef.current.clearField();
            sheetRef.current.close();

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
                urlApi="posts?_expand=user"
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
                functionSubmit={postRequest}
                formRef={formRef}
                sheetRef={sheetRef}
            />
        </>
    );
};

export default Home;
