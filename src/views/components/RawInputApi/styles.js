import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 20px;

    align-items: center;

    flex-direction: row;
`;

export const InputContainer = styled.View.attrs({
    placeholderTextColor: '#666',
})`
    flex: 1;
    height: 50px;
    padding: 0 10px

    background: #f6f6f6;

    border-radius: 5px;
    /* border-bottom-style: solid; */
    border-bottom-color: #222;
    border-bottom-width: 2px;
`;

export const Input = styled.TextInput`
    flex: 1;
`;

export const ButtonSub = styled.TouchableOpacity`
    margin-left: 10px;
`;
