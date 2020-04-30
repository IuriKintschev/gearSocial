import styled from 'styled-components/native';

import { Platform } from 'react-native';

const platVerify = Platform.OS === 'ios' ? 'padding' : 'height';

export const Container = styled.KeyboardAvoidingView.attrs({
    behavior: platVerify,
})`
    flex: 1;
    align-items: center;
    justify-content: space-evenly;
    background: #f9f9f9;
`;

export const Card = styled.View`
    width: 90%;
    height: ${p => p.cardHeight}px;
    background: #ffffff;
    border-radius: 5px;

    box-shadow: 5px 5px 5px #333;
`;

export const TextLogo = styled.Text`
    font-size: 40px;
    font-family: 'KaushanScript-Regular';
`;

export const ButtonView = styled.View`
    flex: 1;

    justify-content: center;

    padding-left: 10px;
    padding-right: 10px;
`;

export const Button = styled.TouchableOpacity`
    height: 50px;
    width: 100%;
    margin-top: 20px;

    background-color: #ff6781;

    border-radius: 10px;

    justify-content: center;
    align-items: center;
`;

export const LabelButton = styled.Text`
    font-size: 30px;
    font-family: 'KaushanScript-Regular';

    color: #f6f6f6;
`;
