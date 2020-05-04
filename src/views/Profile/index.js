//@flow

// imports modules
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Snackbar from 'react-native-snackbar';

// store
import { loadLogout } from '../../store/modules/authorization/actions';

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

// types
import { StateProps } from '../../store';
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
    // eslint-disable-next-line no-shadow
    const state = useSelector((state: StateProps) => state.auth);
    const dispatch = useDispatch();

    // logout
    async function logout() {
        await dispatch(loadLogout());

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
            urlApi={`${state.host}/posts?_expand=user&userId=${state.data.id}`}
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
                    <ProfName>{state.data.name}</ProfName>
                </ProfileHead>
            }
        />
    );
};
export default Profile;
