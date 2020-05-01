import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled.View`
    flex: 1;
`;

export const Scroled = styled.ScrollView`
    flex: 1;
`;

export const LogoutView = styled.View`
    width: 100%;
    height: 50px;

    align-items: flex-end;
    justify-content: center;
`;

export const LogoutButton = styled.TouchableOpacity`
    width: 100px;
    padding-right: 10px;

    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;

export const LogoutLabel = styled.Text`
    font-family: 'Roboto-Regular';
    font-size: 25px;
    font-weight: bold;

    color: #222;
`;

export const ProfileHead = styled.View`
    width: 100%;
    padding-top: ${getStatusBarHeight()}px;

    align-items: center;

    background: #fff;
`;

export const ProfPhoto = styled.View`
    width: 150px;
    height: 150px;

    border-style: solid;
    border-width: 2px;
    border-color: #ff6781;
    border-radius: 100px;
    border-radius: 100px;

    box-shadow: 0 0 2.3px gold;
`;

export const PhotoProfile = styled.Image`
    width: 100%;
    height: 100%;

    border-radius: 100px;
`;

export const ProfName = styled.Text`
    margin: 30px 0;

    font-size: 40px;
    font-family: 'KaushanScript-Regular';
`;
