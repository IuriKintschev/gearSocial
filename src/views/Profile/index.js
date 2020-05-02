//@flow

// imports modules
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
    const [imageSrc, setImageSrc] = useState<String>('');

    // consfig IMGpiker
    const options = {
        title: 'Selecione um avatar!',
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    };

    const photo = () =>
        ImagePicker.showImagePicker(options, response => {
            // const source = { uri: response.uri };
            const source = { uri: 'data:image/jpeg;base64,' + response.data };
            setImageSrc(source);
        });

    return (
        <ScrolledView
            urlApi={`posts?_expand=user&userId=1`}
            itemHeader={
                <ProfileHead>
                    <LogoutView>
                        <LogoutButton>
                            <LogoutLabel>Sair</LogoutLabel>
                            <Icon name="input" size={30} />
                        </LogoutButton>
                    </LogoutView>
                    <ProfPhoto>
                        <PhotoProfile source={avatar} resizeMode="cover" />
                        <ButtonPhoto onPress={photo}>
                            <Icon name="add-a-photo" color="#fff" size={25} />
                        </ButtonPhoto>
                    </ProfPhoto>
                    <ProfName>Iuri</ProfName>
                </ProfileHead>
            }
        />
    );
};
export default Profile;
