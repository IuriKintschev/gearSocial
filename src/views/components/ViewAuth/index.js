//@flow

import React from 'react';
import { View } from 'react-native';

import {
    Container,
    Card,
    TextLogo,
    ButtonView,
    Button,
    LabelButton,
} from './styles';

type Props = {
    children: React.Component,
    TextTopo: String,
    cardHeight: Number,
    onPress: Function,
    buttonLabel: string,
};

const ViewAuth = ({
    children,
    TextTopo,
    cardHeight,
    onPress,
    buttonLabel,
}: Props) => (
    <Container>
        <TextLogo>{TextTopo}</TextLogo>
        <Card cardHeight={cardHeight}>
            <ButtonView>
                {children}
                <Button onPress={onPress}>
                    <LabelButton>{buttonLabel}</LabelButton>
                </Button>
            </ButtonView>
        </Card>
        <View />
    </Container>
);

export default ViewAuth;
