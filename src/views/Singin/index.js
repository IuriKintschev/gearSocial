//@flow

// imports modules
import React, { useRef } from 'react';
import { StyleSheet } from 'react-native';
import shallow from 'zustand/shallow';
import { useAuthStore, StateAuth } from '../../store/authStore';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import Spinner from 'react-native-loading-spinner-overlay';
import * as Yup from 'yup';

// styles, components
import Input from '../components/InputForm';
import ViewAuth from '../components/ViewAuth';
import { WrapperInput, LabelInput, OtherPage, OtherPageLabel } from './styles';

const Singin = () => {
    // hooks
    const navigation = useNavigation();
    // referencia do formulario
    const formRef = useRef(null);
    const [loading, singinRequest] = useAuthStore(
        (state: StateAuth) => [state.loading, state.singinRequest],
        shallow,
    ); // state

    /**
     * Funçao submit
     *  com validaçao utilizando YUP
     * @param {object} data passado pelo UNFROM
     */
    async function handleSubmit(data) {
        try {
            const schema = Yup.object().shape({
                email: Yup.string()
                    .email()
                    .required(),
                password: Yup.string()
                    .min(6)
                    .required(),
            });
            await schema.validate(data, {
                abortEarly: false,
            });

            // clear error log
            formRef.current.setErrors({});

            // Validation passed
            singinRequest(data);
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const validationErrors = {};
                if (err instanceof Yup.ValidationError) {
                    // Validation failed
                    err.inner.forEach(error => {
                        validationErrors[error.path] = error.message;
                        // resetando o campo invalido
                        formRef.current.clearField(error.path);
                    });
                    formRef.current.setErrors(validationErrors);
                }
            }
        }
    }

    return (
        <ViewAuth
            TextTopo="Gear Social"
            buttonLabel="Entrar"
            cardHeight={350}
            onPress={() => formRef.current.submitForm()}>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <WrapperInput topHeight={15}>
                    <LabelInput>E-mail</LabelInput>
                    <Input
                        nameUnForm="email"
                        icon={'envelope'}
                        iconSize={20}
                        keyboardType="email-address"
                        placeholder="email@addres.com"
                    />
                </WrapperInput>
                <WrapperInput topHeight={35}>
                    <LabelInput>Password</LabelInput>
                    <Input
                        nameUnForm="password"
                        icon={'lock'}
                        iconSize={25}
                        keyboardType="default"
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                </WrapperInput>
            </Form>
            <OtherPage onPress={() => navigation.navigate('SingnOut')}>
                <OtherPageLabel>Registre-se!</OtherPageLabel>
            </OtherPage>
            <Spinner
                visible={loading}
                textContent={'Loading...'}
                textStyle={styles.loadingOverlay}
            />
        </ViewAuth>
    );
};

const styles = StyleSheet.create({
    loadingOverlay: {
        color: '#fff',
    },
});

export default Singin;
