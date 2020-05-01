//@flow

// imports modules
import React, { useState, useEffect } from 'react';
import { StatusBar, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// helpers
import { ifCloseToTop } from '../../helpers/scrollFunc';

//services
import Api from '../../services/api';

// assets
import avatar from '../../../assets/images/avatar.jpg';

// styles, compoenents
import {
    Container,
    Scroled,
    ProfileHead,
    LogoutView,
    LogoutButton,
    LogoutLabel,
    ProfPhoto,
    PhotoProfile,
    ProfName,
    ButtonPhoto,
} from './styles';
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
    const [statusHide, setStatusHide] = useState(false);
    const [myPosts, setMyPosts] = useState<FormatPost[]>(null);

    //fix retirar apos
    useEffect(() => {
        //http://localhost:5001/posts?_expand=user&userId=1
        Api.get('http://localhost:5001/posts?_expand=user').then(data =>
            setMyPosts(data.data),
        );
    }, []);

    return (
        <>
            <StatusBar
                // config statausbar
                barStyle={
                    Platform.OS === 'android' ? 'light-content' : 'dark-content'
                }
                backgroundColor={Platform.OS === 'android' && '#222'}
                // config statausbar END
                hidden={statusHide} // escontendo barra ao scrolar a tela
                showHideTransition="slide"
            />
            <Container>
                <Scroled
                    // logica para esconder status bar
                    onScroll={({ nativeEvent }) => {
                        if (ifCloseToTop(nativeEvent)) {
                            setStatusHide(false);
                        } else {
                            setStatusHide(true);
                        }
                    }}
                    // logica para esconder status bar END
                >
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
                                <Icon
                                    name="add-a-photo"
                                    color="#fff"
                                    size={25}
                                />
                            </ButtonPhoto>
                        </ProfPhoto>
                        <ProfName>Iuri</ProfName>
                    </ProfileHead>
                    {myPosts && myPosts.map(t => <TilePost data={t} />)}
                </Scroled>
            </Container>
        </>
    );
};
export default Profile;
