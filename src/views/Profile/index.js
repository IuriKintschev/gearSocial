//@flow

// imports modules
import React, { useState } from 'react';
import { StatusBar, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// helpers
import { ifCloseToTop } from '../../helpers/scrollFunc';

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
} from './styles';

const Profile = () => {
    // states
    const [statusHide, setStatusHide] = useState(false);
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
                            <LogoutButton onPress={() => {}}>
                                <LogoutLabel>Sair</LogoutLabel>
                                <Icon name="input" size={30} />
                            </LogoutButton>
                        </LogoutView>
                        <ProfPhoto>
                            <PhotoProfile source={avatar} resizeMode="cover" />
                        </ProfPhoto>
                        <ProfName>Iuri</ProfName>
                    </ProfileHead>
                </Scroled>
            </Container>
        </>
    );
};
export default Profile;
