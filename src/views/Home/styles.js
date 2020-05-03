import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const LabelView = styled.View`
    flex: 1;

    padding-left: 40px;
`;

export const LabelText = styled.Text`
    font-size: 30px;
    font-family: 'KaushanScript-Regular';

    margin: 0 auto;
`;

export const ButtonHeader = styled.TouchableOpacity`
    justify-content: center;
    margin-right: 10px;
`;

export const HeaderView = styled.View`
    height: 100px;
    padding-top: ${getStatusBarHeight()}px;

    background: #fff;

    flex-direction: row;
`;
