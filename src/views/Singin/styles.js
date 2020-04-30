import styled from 'styled-components/native';

export const WrapperInput = styled.View`
    margin-top: ${p => p.topHeight}px;
`;

export const LabelInput = styled.Text`
    font-size: 18px;
    font-family: 'Roboto-Regular';

    margin-left: 10px;
    margin-bottom: 5px;
`;

export const OtherPage = styled.TouchableOpacity`
    width: 100%;
    padding-top: 10px;
    padding-right: 10px;

    align-items: flex-end;
`;

export const OtherPageLabel = styled.Text`
    font-size: 18px;
    font-family: 'Roboto-Regular';
`;
