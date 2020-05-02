import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled.View`
    flex: 1;
`;

export const AddPostView = styled.View`
    width: 100%;
    height: 300px;

    padding-top: ${getStatusBarHeight()}px;

    background: #fff;
`;
