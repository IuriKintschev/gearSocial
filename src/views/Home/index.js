//@flow

// import modules
import React, { useRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';

// styles, components
import {
    Container,
    AddPostView,
    ButtonSend,
    WidthTitle,
    WidthContent,
    WidthDirection,
    LabelText,
    LabelView,
} from './styles';

// types
import ScrolledView from '../components/ScrolledView';
import InputForm from '../components/InputForm';

const Home = () => {
    // states

    // referencia do formulario
    const formRef = useRef(null);

    /**
     * Funçao submit
     *  com validaçao utilizando YUP
     * @param {object} data passado pelo UNFROM
     */
    async function handleSubmit(data) {
        try {
            const schema = Yup.object().shape({
                title: Yup.string()
                    .min(5)
                    .max(30)
                    .required(),
                content: Yup.string()
                    .min(10)
                    .max(280)
                    .required(),
            });
            await schema.validate(data, {
                abortEarly: false,
            });

            // clear error log
            formRef.current.setErrors({});

            // Validation passed
            console.log(data);
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
        <ScrolledView
            urlApi="posts?_expand=user"
            itemHeader={
                <Container>
                    <AddPostView>
                        <Form ref={formRef} onSubmit={handleSubmit}>
                            <LabelView>
                                <WidthTitle>
                                    <InputForm
                                        nameUnForm="title"
                                        placeholder="Manda uma prévia ai!"
                                        backdroundHint="#fff"
                                        borderColor="#22B5F9"
                                    />
                                </WidthTitle>
                                <LabelText>Gear Feed</LabelText>
                            </LabelView>
                            <WidthDirection>
                                <WidthContent>
                                    <InputForm
                                        nameUnForm="content"
                                        placeholder="Em que está pensando ?"
                                        backdroundHint="#fff"
                                        borderColor="#22B5F9"
                                    />
                                </WidthContent>
                                <ButtonSend
                                    onPress={() =>
                                        formRef.current.submitForm()
                                    }>
                                    <Icon
                                        name="send"
                                        color="#ff6781"
                                        size={30}
                                    />
                                </ButtonSend>
                            </WidthDirection>
                        </Form>
                    </AddPostView>
                </Container>
            }
        />
    );
};

export default Home;
