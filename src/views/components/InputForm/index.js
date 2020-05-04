//@flow

import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, Wrapper, Input } from './styles';

type InputPros = {
    nameUnForm: String,
    placeholder: String,
    icon?: String,
    iconSize?: Number,
    keyboardType: 'email-address' | 'default' | 'numeric',
    secureTextEntry?: boolean,
    backdroundHint?: String,
    borderColor?: String,
    multiline?: Boolean,
    linesNumber?: Number,
    contentHeight?: Number,
    alingContent?: 'center' | 'flex-start' | 'flex-end',
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
    backdroundHint = '#f9f9f9',
    borderColor = '#222',
    multiline = false,
    linesNumber = 1,
    contentHeight = 50,
    alingContent = 'center',
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
        <Container contentHeight={contentHeight}>
            <Wrapper
                alingContent={alingContent}
                colorBorder={error ? 'red' : borderColor}
                bgHint={backdroundHint}>
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
                    onChangeText={value => {
                        if (inputRef.current) {
                            inputRef.current.value = value;
                        }
                    }}
                    multiline={multiline}
                    numberOfLines={linesNumber}
                />
            </Wrapper>
        </Container>
    );
};

export default InputForm;
