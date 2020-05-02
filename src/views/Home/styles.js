import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled.View`
    flex: 1;
`;

export const AddPostView = styled.View`
    width: 100%;
    height: 180px;

    padding-top: ${getStatusBarHeight()}px;

    background: #fff;
`;

export const WidthTitle = styled.View`
    width: 55%;
`;

export const WidthContent = styled.View`
    width: 90%;
`;

export const WidthDirection = styled.View`
    flex-direction: row;
`;

export const ButtonSend = styled.TouchableOpacity`
    justify-content: flex-end;
`;

export const LabelView = styled.View`
    flex-direction: row;
    align-items: flex-end;
`;

export const LabelText = styled.Text`
    font-size: 30px;
    font-family: 'KaushanScript-Regular';
    margin: 0 auto;
`;
