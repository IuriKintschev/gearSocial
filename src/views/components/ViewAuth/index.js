//@flow

import React, { useRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View } from 'react-native';

import RawModal from '../RawInputApi';

import {
    Container,
    Card,
    TextLogo,
    ButtonView,
    Button,
    LabelButton,
    ConfigView,
    ConfigButton,
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
}: Props) => {
    // ref
    const sheetRef = useRef(null);

    return (
        <Container>
            <TextLogo>{TextTopo}</TextLogo>
            <Card cardHeight={cardHeight}>
                <ButtonView>
                    {children}
                    <Button onPress={onPress}>
                        <LabelButton>{buttonLabel}</LabelButton>
                    </Button>
                    <ConfigView>
                        <ConfigButton onPress={() => sheetRef.current.open()}>
                            <Icon name="settings" size={20} color="#222" />
                        </ConfigButton>
                    </ConfigView>
                </ButtonView>
            </Card>
            <View />
            <RawModal refSheet={sheetRef} />
        </Container>
    );
};
export default ViewAuth;
