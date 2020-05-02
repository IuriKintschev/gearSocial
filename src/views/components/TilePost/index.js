//@flow

// imports modules
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

// assest
import avatarImg from '../../../../assets/images/avatar.jpg';

// helpers
import { dateToScreen } from '../../../helpers/dateToScreen';

// styles, components
import {
    Container,
    Header,
    ImgHeader,
    HeaderName,
    HeaderDate,
    HeaderLabel,
    BodyView,
    BodyTitle,
    BodyContent,
    FooterView,
    ActionButton,
} from './styles';

// types
import { FormatPost } from '../../Profile';

export type Props = {
    data: FormatPost,
};

const TilePost = ({ data }: Props) => {
    return (
        <Container>
            <Header>
                <ImgHeader source={avatarImg} resizeMode="cover" />
                <HeaderLabel>
                    <HeaderName>{data.user.name}</HeaderName>
                    <HeaderDate>{dateToScreen(data.date)}</HeaderDate>
                </HeaderLabel>
            </Header>
            <BodyView>
                <BodyTitle>{data.title}</BodyTitle>
                <BodyContent>{data.content}</BodyContent>
            </BodyView>
            <FooterView>
                <ActionButton onPress={() => {}}>
                    <Icon name="grain" size={30} color="#888" />
                </ActionButton>
            </FooterView>
        </Container>
    );
};

export default TilePost;
