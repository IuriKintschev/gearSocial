import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: ${p => p.contentHeight}px;

    padding-left: 10px;
    padding-right: 10px;
`;

export const Wrapper = styled.View`
    flex: 1;
    flex-direction: row;
    padding-left: 10px;
    padding-top: 5px;

    align-items: ${p => p.alingContent};

    background: ${p => p.bgHint};

    border-radius: 5px;
    border-style: solid;
    border-bottom-color: ${p => p.colorBorder};
    border-bottom-width: 2px;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#666',
})`
    flex: 1;
    padding-left: 10px;

    font-size: 16px;
`;
