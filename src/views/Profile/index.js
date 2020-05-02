//@flow

// imports modules
import React, { useState, useRef } from 'react';
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
import TilePost from '../components/TilePost';
import BottomSheet from '../components/BottomSheetAtion';

// types
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
    const [myPosts, setMyPosts] = useState<FormatPost[]>(null);
    const [postId, setPostId] = useState<Number>(0);
    const [imageSrc, setImageSrc] = useState<String>('');

    // references
    const bottomSheetRef = useRef(null);

    // action CRUD post
    async function bottomSheet(id) {
        await setPostId(id);
        bottomSheetRef.current.show();
    }

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
            setState={setMyPosts}
            urlApi="posts?_expand=user&userId=1">
            <ProfileHead>
                <LogoutView>
                    <LogoutButton
                        onPress={() => {
                            console.log(myPosts);
                        }}>
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
            {myPosts &&
                myPosts.map(t => (
                    <TilePost key={t.date} data={t} onPress={bottomSheet} />
                ))}
            <BottomSheet bottomSheetRef={bottomSheetRef} stateId={postId} />
        </ScrolledView>
    );
};
export default Profile;
