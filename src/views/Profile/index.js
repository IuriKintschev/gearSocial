//@flow

// imports modules
import React, { useState } from 'react';
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
                    <ButtonPhoto>
                        <Icon name="add-a-photo" color="#fff" size={25} />
                    </ButtonPhoto>
                </ProfPhoto>
                <ProfName>Iuri</ProfName>
            </ProfileHead>
            {myPosts && myPosts.map(t => <TilePost key={t.date} data={t} />)}
        </ScrolledView>
    );
};
export default Profile;
