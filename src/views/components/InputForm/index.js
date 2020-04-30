//@flow

import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, Wrapper, Input } from './styles';

type InputPros = {
    nameUnForm: String,
    placeholder: string,
    icon?: String,
    iconSize?: Number,
    keyboardType: 'email-address' | 'default' | 'numeric',
    secureTextEntry?: boolean,
};

const InputForm = ({
    nameUnForm,
    icon,
    iconSize,
    keyboardType = 'default',
    placeholder,
    secureTextEntry = false,
    value,
    onchange,
}: InputPros) => {
    // referencia do input para o unform
    const inputRef = useRef(null);
    const { fieldName, registerField, defaultValue = '', error } = useField(
        nameUnForm,
    );
    // intit unForm input
    useEffect(() => {
        inputRef.current.value = defaultValue;
    }, [defaultValue]);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
            clearValue(ref) {
                ref.value = '';
                ref.clear();
            },
            setValue(ref, value) {
                ref.setNativeProps({ text: value });
                inputRef.current.value = value;
            },
            getValue(ref) {
                return ref.value;
            },
        });
    }, [fieldName, registerField]);
    // intit unForm input END

    return (
        <Container>
            <Wrapper colorBorder={error ? 'red' : '#222'}>
                <Icon name={icon} size={iconSize} color="#333" />
                <Input
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    autoCapitalize="none"
                    underlineColorAndroid="transparent"
                    secureTextEntry={secureTextEntry}
                    ref={inputRef}
                    keyboardAppearance="dark"
                    defaultValue={defaultValue}
                    placeholderTextColor="#666360"
                    onChangeText={value => {
                        if (inputRef.current) {
                            inputRef.current.value = value;
                        }
                    }}
                />
            </Wrapper>
        </Container>
    );
};

export default InputForm;
