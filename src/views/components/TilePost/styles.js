import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    margin-top: 15px;

    background: #fff;
`;

export const Header = styled.View`
    width: 100%;
    padding: 10px;

    flex-direction: row;
`;

export const ImgHeader = styled.Image`
    width: 50px;
    height: 50px;

    border-radius: 100px;
`;

export const HeaderLabel = styled.View`
    margin-left: 10px;
    justify-content: center;
`;

export const HeaderName = styled.Text`
    font-size: 18px;
    font-weight: bold;
    font-family: 'Roboto-Regular';

    color: #222;
`;

export const HeaderDate = styled.Text`
    font-size: 14px;
    font-family: 'Roboto-Regular';

    color: #888;
`;

export const BodyView = styled.View`
    width: 100%;
    padding: 20px;
`;

export const BodyTitle = styled.Text`
    font-size: 18px;
    font-family: 'Roboto-Regular';

    margin-bottom: 20px;
`;

export const BodyContent = styled.Text`
    font-size: 15px;
    font-family: 'Roboto-Regular';

    color: #666;
`;

export const FooterView = styled.View`
    width: 100%;
    padding-bottom: 10px;
    padding-right: 15px;

    align-items: flex-end;
`;

export const ActionButton = styled.TouchableOpacity``;
