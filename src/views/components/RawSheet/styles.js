import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;

    padding: 20px 10px;
`;

export const WidthTitle = styled.View`
    width: 100%;
`;

export const WidthContent = styled.View`
    width: 100%;
`;

export const SendView = styled.View`
    flex: 1;

    justify-content: flex-end;
`;

export const LabelInput = styled.Text`
    font-size: 18px;
    font-family: 'Roboto-Regular';
    font-weight: bold;

    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: 5px;
`;

export const ButtonSend = styled.TouchableOpacity`
    background: #22b5f9;

    align-items: center;
    margin: 0 10px;
    padding: 5px;

    border-radius: 5px;
`;

export const LabelSend = styled.Text`
    font-size: 30px;
    font-family: 'KaushanScript-Regular';

    color: #fff;
`;
