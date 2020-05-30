//@flow

// imports modules
import React from 'react';
import shallow from 'zustand/shallow';
import { useAuthStore, StateAuth } from '../../store/authStore';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Snackbar from 'react-native-snackbar';

// assets
import avatar from '../../../assets/images/avatar.jpg';

// styles, compoenents
import {
    ProfileHead,
    LogoutView,
    LogoutButton,
    LogoutLabel,
    ProfPhoto,
    PhotoProfile,
    ProfName,
    ButtonPhoto,
} from './styles';
import ScrolledView from '../components/ScrolledView';

export type FormatPost = {
    title: string,
    content: string,
    date: string,
    id: Number,
    userId: Number,
    user: {
        name: string,
        email: string,
        id: Number,
    },
};

const Profile = () => {
    // states
    const [host, data, logoutRequest] = useAuthStore(
        (state: StateAuth) => [state.host, state.data, state.logoutRequest],
        shallow,
    );

    // logout
    function logout() {
        // logout
        logoutRequest();

        // dialog
        Snackbar.show({
            text: 'Você deslogou da aplicação!',
            backgroundColor: '#4eb941',
            duration: Snackbar.LENGTH_LONG,
        });
    }

    return (
        <ScrolledView
            // endpoint da api para recuperar os posts
            urlApi={`${host}/posts?_expand=user&userId=${data.id}`}
            itemHeader={
                <ProfileHead>
                    <LogoutView>
                        <LogoutButton onPress={logout}>
                            <LogoutLabel>Sair</LogoutLabel>
                            <Icon name="input" size={30} />
                        </LogoutButton>
                    </LogoutView>
                    <ProfPhoto>
                        <PhotoProfile source={avatar} resizeMode="cover" />
                        <ButtonPhoto>
                            <Icon name="add-a-photo" color="#fff" size={25} />
                        </ButtonPhoto>
                    </ProfPhoto>
                    <ProfName>{data.name}</ProfName>
                </ProfileHead>
            }
        />
    );
};
export default Profile;
